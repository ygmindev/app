"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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
    cleanDocument = /* @__PURE__ */ __name((value) => {
      const _value = (0, import_lodash4.toPlainObject)(value);
      (0, import_lodash4.keys)(_value).forEach((k) => {
        const v = _value[k];
        (0, import_lodash4.isPlainObject)(v) && (_value[k] = cleanDocument(v));
        (0, import_lodash4.isString)(k) && k.startsWith("_") && (0, import_lodash4.isString)(v) && (_value[k] = new import_mongodb.ObjectId(v));
        v === void 0 && delete _value[k];
      });
      return _value;
    }, "cleanDocument");
  }
});

// ../lib-backend/src/database/utils/getConnection/getConnection.ts
var import_graphql_relay, getConnection;
var init_getConnection = __esm({
  "../lib-backend/src/database/utils/getConnection/getConnection.ts"() {
    "use strict";
    import_graphql_relay = require("graphql-relay");
    getConnection = /* @__PURE__ */ __name(async ({
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
  }
});

// ../lib-shared/src/environment/environment.constants.ts
var init_environment_constants = __esm({
  "../lib-shared/src/environment/environment.constants.ts"() {
    "use strict";
  }
});

// ../lib-config/src/database/_database.config.ts
var _databaseConfig;
var init_database_config = __esm({
  "../lib-config/src/database/_database.config.ts"() {
    "use strict";
    init_environment_constants();
    _databaseConfig = /* @__PURE__ */ __name(({
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
  }
});

// ../lib-shared/src/core/errors/DuplicateError/DuplicateError.ts
var DuplicateError;
var init_DuplicateError = __esm({
  "../lib-shared/src/core/errors/DuplicateError/DuplicateError.ts"() {
    "use strict";
    DuplicateError = class extends Error {
    };
    __name(DuplicateError, "DuplicateError");
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
    __name(UninitializedError, "UninitializedError");
  }
});

// ../lib-shared/src/formatting/utils/dateTimeFormat/_dateTimeFormat.ts
var import_moment, _dateTimeFormat;
var init_dateTimeFormat = __esm({
  "../lib-shared/src/formatting/utils/dateTimeFormat/_dateTimeFormat.ts"() {
    "use strict";
    import_moment = __toESM(require("moment"));
    _dateTimeFormat = /* @__PURE__ */ __name(({ format: format2, value }) => (0, import_moment.default)(value).format(format2), "_dateTimeFormat");
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
var import_reflect_metadata2, import_core, import_lodash5, _Database;
var init_Database = __esm({
  "../lib-backend/src/database/utils/Database/_Database.ts"() {
    "use strict";
    import_reflect_metadata2 = require("reflect-metadata");
    init_cleanDocument();
    init_getConnection();
    init_database_config();
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
    __name(_Database, "_Database");
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
    __name(NotImplementedError, "NotImplementedError");
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
    withEntity = /* @__PURE__ */ __name(({
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
    _getField = /* @__PURE__ */ __name(({
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
    _getColumn = /* @__PURE__ */ __name(({
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
    withField = /* @__PURE__ */ __name(({
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
    __name(InvalidArgumentError, "InvalidArgumentError");
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
    _getHook = /* @__PURE__ */ __name(({ type }) => {
      switch (type) {
        case "BEFORE_CREATE" /* BEFORE_CREATE */:
          return (0, import_core4.BeforeCreate)();
        default:
          throw new InvalidArgumentError();
      }
    }, "_getHook");
    withHook = /* @__PURE__ */ __name(({ type }) => (target, propertyKey) => _getHook({ type })(target, propertyKey), "withHook");
  }
});

// ../lib-shared/src/core/utils/isEmpty/isEmpty.ts
var import_lodash6, isEmpty;
var init_isEmpty = __esm({
  "../lib-shared/src/core/utils/isEmpty/isEmpty.ts"() {
    "use strict";
    import_lodash6 = require("lodash");
    isEmpty = /* @__PURE__ */ __name((value) => value === "" || (0, import_lodash6.isNil)(value) || JSON.stringify(value) === "{}", "isEmpty");
  }
});

// ../lib-backend/src/resource/resources/EntityResource/EntityResource.ts
var import_tslib, import_lodash7, _a, _b, EntityResource;
var init_EntityResource = __esm({
  "../lib-backend/src/resource/resources/EntityResource/EntityResource.ts"() {
    "use strict";
    import_tslib = require("tslib");
    init_withEntity();
    init_withField();
    init_withHook();
    init_withHook_constants();
    init_isEmpty();
    init_form_constants();
    import_lodash7 = require("lodash");
    EntityResource = /* @__PURE__ */ __name(class EntityResource2 {
      created;
      _id;
      async beforeCreate() {
        (0, import_lodash7.forEach)(this, (v, k) => {
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
  }
});

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResource.ts
var import_tslib2, EmbeddedResource;
var init_EmbeddedResource = __esm({
  "../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResource.ts"() {
    "use strict";
    import_tslib2 = require("tslib");
    init_withEntity();
    init_EntityResource();
    EmbeddedResource = /* @__PURE__ */ __name(class EmbeddedResource2 extends EntityResource {
    }, "EmbeddedResource");
    EmbeddedResource = (0, import_tslib2.__decorate)([
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
var import_tslib3, Card;
var init_Card = __esm({
  "../lib-backend/src/billing/resources/Card/Card.ts"() {
    "use strict";
    import_tslib3 = require("tslib");
    init_withEntity();
    init_withField();
    init_EmbeddedResource();
    init_Card_constants();
    init_form_constants();
    Card = /* @__PURE__ */ __name(class Card2 extends EmbeddedResource {
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
var import_tslib4, LinkedUser;
var init_LinkedUser = __esm({
  "../lib-backend/src/user/resources/LinkedUser/LinkedUser.ts"() {
    "use strict";
    import_tslib4 = require("tslib");
    init_withEntity();
    init_withField();
    init_EmbeddedResource();
    init_form_constants();
    init_LinkedUser_constants();
    LinkedUser = /* @__PURE__ */ __name(class LinkedUser2 extends EmbeddedResource {
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
var import_tslib5, _a2, _b2, _c, _d, User;
var init_User = __esm({
  "../lib-backend/src/user/resources/User/User.ts"() {
    "use strict";
    import_tslib5 = require("tslib");
    init_Card();
    init_withEntity();
    init_withField();
    init_EntityResource();
    init_LinkedUser();
    init_Card_constants();
    init_LinkedUser_constants();
    init_User_constants();
    User = /* @__PURE__ */ __name(class User2 extends EntityResource {
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
var import_tslib6, AccessForm, Access;
var init_Access = __esm({
  "../lib-backend/src/auth/resources/Access/Access.ts"() {
    "use strict";
    import_tslib6 = require("tslib");
    init_withEntity();
    init_withField();
    init_EntityResource();
    init_User();
    init_Access_constants();
    init_form_constants();
    AccessForm = /* @__PURE__ */ __name(class AccessForm2 {
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
    Access = /* @__PURE__ */ __name(class Access2 extends EntityResource {
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
    withCondition = /* @__PURE__ */ __name((condition, ifTrue, ifFalse) => (...params) => ifTrue && condition ? ifTrue(...params) : ifFalse && !condition ? ifFalse(...params) : void 0, "withCondition");
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
    getAccessRole = /* @__PURE__ */ __name((level) => {
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
    withAccess = /* @__PURE__ */ __name(({
      level = "RESTRICTED" /* RESTRICTED */
    }) => withCondition(level !== "PUBLIC" /* PUBLIC */, (0, import_type_graphql3.Authorized)(getAccessRole(level))), "withAccess");
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
var import_tslib7, _a3, OtpForm, Otp;
var init_Otp = __esm({
  "../lib-backend/src/auth/resources/Otp/Otp.ts"() {
    "use strict";
    import_tslib7 = require("tslib");
    init_Otp_constants();
    init_withAccess();
    init_withEntity();
    init_withField();
    init_EntityResource();
    init_Access_constants();
    init_Otp_constants2();
    init_form_constants();
    OtpForm = /* @__PURE__ */ __name(class OtpForm2 {
      username;
    }, "OtpForm");
    (0, import_tslib7.__decorate)([
      withField({ isRepository: true, isUnique: true }),
      (0, import_tslib7.__metadata)("design:type", String)
    ], OtpForm.prototype, "username", void 0);
    OtpForm = (0, import_tslib7.__decorate)([
      withEntity({ name: `${OTP_RESOURCE_NAME}Form` })
    ], OtpForm);
    Otp = /* @__PURE__ */ __name(class Otp2 extends EntityResource {
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
var import_tslib8, _a4, _b3, DummyEmbeddedResource;
var init_DummyEmbeddedResource = __esm({
  "../lib-backend/src/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.ts"() {
    "use strict";
    import_tslib8 = require("tslib");
    init_Otp_constants();
    init_withEntity();
    init_withField();
    init_EmbeddedResource();
    init_form_constants();
    init_DummyEmbeddedResource_constants();
    DummyEmbeddedResource = /* @__PURE__ */ __name(class DummyEmbeddedResource2 extends EmbeddedResource {
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
var import_tslib9, _a5, _b4, _c2, _d2, DummyEntityResource;
var init_DummyEntityResource = __esm({
  "../lib-backend/src/test/resources/DummyEntityResource/DummyEntityResource.ts"() {
    "use strict";
    import_tslib9 = require("tslib");
    init_Otp_constants();
    init_withEntity();
    init_withField();
    init_EntityResource();
    init_DummyEmbeddedResource();
    init_form_constants();
    init_DummyEmbeddedResource_constants();
    init_DummyEntityResource_constants();
    DummyEntityResource = /* @__PURE__ */ __name(class DummyEntityResource2 extends EntityResource {
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
var init_database_config2 = __esm({
  "../lib-config/src/database/configs/database.config.ts"() {
    "use strict";
    init_Access();
    init_Otp();
    init_DummyEntityResource();
    init_User();
    init_database_constants();
    databaseConfig = {
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
    withContainer = /* @__PURE__ */ __name(({ name } = {}) => (target) => {
      _withContainer()(target);
      name && _Container.set(name, target);
      return target;
    }, "withContainer");
  }
});

// ../lib-backend/src/database/utils/DatabaseMain/DatabaseMain.ts
var DatabaseMain_exports = {};
__export(DatabaseMain_exports, {
  DatabaseMain: () => DatabaseMain
});
var import_tslib10, DatabaseMain;
var init_DatabaseMain = __esm({
  "../lib-backend/src/database/utils/DatabaseMain/DatabaseMain.ts"() {
    "use strict";
    import_tslib10 = require("tslib");
    init_Database2();
    init_database_config2();
    init_withContainer2();
    DatabaseMain = /* @__PURE__ */ __name(class DatabaseMain2 extends _Database {
      constructor() {
        super(databaseConfig);
      }
    }, "DatabaseMain");
    DatabaseMain = (0, import_tslib10.__decorate)([
      withContainer(),
      (0, import_tslib10.__metadata)("design:paramtypes", [])
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
var import_lodash = require("lodash");
import_firebase_admin.default.apps.length || import_firebase_admin.default.initializeApp({
  credential: import_firebase_admin.default.credential.cert({
    clientEmail: "firebase-adminsdk-ofw76@app-46c38.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDTb4hDO2RhqDrP\\nyaINPn8prgdZvDBEXioW0BeS9f4lnud8CebdiZ7qu7LOVUEJj3FKnPt/4RgSGK8m\\n+RHeLnzoljfDdx8SotidTSngImhoznNsb3GWjH83nxRsP0YKPijYK/MfzfcCMf6n\\nX9mwrhJkad8tOzgzAbadNcvEfFUQstkTjZ34dp/go2euFT4vGJfB+K2lChvZs6Tt\\n/jYmaUVehPAvyN4s5+CwbP+dzM6jm7/Ibd54zVw+d2kme1IYs7fl53KWOlRaEl7l\\neoiqvqWFTTaCypOkWHTZWaEvAJxxMo7OEUnoYQegYb2+TkfKcf82O4N2JKAWqpnz\\nWMFqqMHbAgMBAAECggEAH7as85im99bp61zNB7uGC1RlGdqWSsrs+TsBLjPjiPUK\\nt5osnLIVuhOpQDWdabewQIbHWmkC2UQGkYvuWCsU5TYS6yik6oCuiPmX/Fxs2LuO\\nqIcWvIQaWNdtksby1Hp6WeJNt0mHcTbagXRpDI0viQwwQ3KMfWoWYAI/rBsSD0ze\\nS6OTsAN0UNxYTOotg6WCQN5O30G97s4oBgtWvftMWicd6ckfInyoWt48kyiYmLaG\\nPhxxLSaYb+/Ve33YdEED5QHCuH8fYvyYlKM4ts/m97wMkWa6a6taoQvZ4dUKZKFF\\nzj1yxfmCfbVbiFiuXH8PsHp/jr0L50cIfgggp5bWgQKBgQD0/MLoQHK8g9mX7lXM\\nA75XZGDsUw6Yrl0Ozr2HVTy7PQXeSrS6QEH9OwJ6O2nbps596f3zb5EXbXl9KdVZ\\nrqGkXKLaV1OsMppqoLIc/UlNMLURNzluJdLQhEun608p/j/x0kPdBKc9lB92IFP/\\nqkuNJ8EMZDwvp8YvkMLuKC/UuwKBgQDc8Ksp4UoJ5cF/69oM63gZWAFJe6KE+mAm\\nB2oEq+6Ml9ktD1hZKnqVZRkS6o86aibsbqTbAR20k/DPuNm+piOSunISiSB5iOvA\\nXASl9ddS0aAAsYQ74XAsySP7TdNmolqrKd2Loo85KqDwVGAXInT8Tac0oPiRp77D\\nhxS9VsyFYQKBgQDiLFhkwtsqXy+LrGVZLDuVwv4YL7XSD2eqPAON5Ytj8TpxttaS\\n/K/vcYMgBan9N0p7xILHM8DnuBHpE638VdS1QTC4EtcUqsMUnbbSPKRntwfzFODY\\nZ+LwzrJqHDvBsRCn2E7+xUUA/Lbu/3mNF1MYxhLbtc460NGPKD5OUJuX8QKBgBB3\\n6/o6Lb+hHZRAa0dtQc15ztbAXXPWCdar1M42VpiqNOjz7NzwmqSKHZ1YWIa9JNuY\\nv7cHVUSBhoClQa3BSoOEXD5fdEk62H/FHB+WvI8Syv9iO/4OpsLf10vDGE/dKC77\\n9uSSoGRddhOT5nmy+s9Xpm/4065ft4txhS07zBDhAoGABQLhltA5+pP+wTt3CQoD\\npXQ8MQv0FvBYSxPPuGWKavRRlco1D68k1mf+BiyQ2l2oGyUlWGObA+2w7yFrPmRB\\n9eM3AUmqFKZRTQZy5QMyF0RiugH4lVg4CCIu4kvwWA4tzo296WWlseSJBIF9+kTt\\nsefeNjnDvvPVF0xMglCR6DI=\\n-----END PRIVATE KEY-----\\n".replace(/\\n/gm, "\n"),
    projectId: "app-46c38"
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
var _getContext = /* @__PURE__ */ __name(async ({ context, event }) => {
  const { authorization } = event.headers;
  if (authorization) {
    const [_, token] = authorization.split(" ");
    if (token && token !== "null") {
      const user = await _JwtService.verifyToken(token);
      (0, import_lodash2.set)(context, "user", user);
    }
  }
  return context;
}, "_getContext");

// ../lib-backend/src/setup/utils/initialize/initialize.ts
init_Container2();

// ../lib-shared/src/setup/utils/initialize/initialize.ts
var import_reflect_metadata = require("reflect-metadata");
var import_register = require("source-map-support/register");
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
    const { DatabaseMain: DatabaseMain3 } = await Promise.resolve().then(() => (init_DatabaseMain(), DatabaseMain_exports));
    await initialize();
    await _Container.get(DatabaseMain3).initialize();
    isInitialized2 = true;
  }
}, "initialize");

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

// ../lib-config/src/http/graphql/_graphql.config.ts
var import_type_graphql4 = require("type-graphql");
var _graphqlConfig = /* @__PURE__ */ __name(({
  authorize: authorize2,
  container: container2,
  resolverExtension,
  schemaPath
}) => (0, import_type_graphql4.buildSchemaSync)({
  authChecker: ({ context }, roles) => authorize2({ context, roles }),
  container: container2,
  emitSchemaFile: schemaPath,
  nullableByDefault: true,
  resolvers: [fromPackages(`*/src/**/*.${resolverExtension}`)],
  validate: {
    forbidUnknownValues: false
  }
}), "_graphqlConfig");

// ../lib-backend/src/auth/resources/Access/AccessResolver/AccessResolver.ts
var import_tslib26 = require("tslib");
init_Access();

// ../lib-backend/src/auth/resources/Access/AccessService/AccessService.ts
var import_tslib11 = require("tslib");

// ../lib-backend/src/resource/resources/EntityResource/EntityResourceService/EntityResourceService.ts
init_DatabaseMain();

// ../lib-shared/src/core/utils/cleanObject/cleanObject.ts
var import_lodash8 = require("lodash");
var cleanObject = /* @__PURE__ */ __name((value) => {
  const _value = (0, import_lodash8.isPlainObject)(value) ? value : (0, import_lodash8.toPlainObject)(value);
  (0, import_lodash8.keys)(_value).forEach((k) => {
    const v = _value[k];
    (0, import_lodash8.isPlainObject)(v) && cleanObject(v);
    v === void 0 && delete _value[k];
  });
  return _value;
}, "cleanObject");

// ../lib-backend/src/resource/resources/EntityResource/EntityResourceService/EntityResourceService.ts
init_Container2();
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
init_Access_constants();
init_withContainer2();
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
init_withEntity();

// ../lib-backend/src/resource/utils/Args/Args.ts
var import_tslib17 = require("tslib");
init_withEntity();
init_withField();

// ../lib-backend/src/resource/utils/Filter/Filter.ts
var import_tslib12 = require("tslib");
init_withEntity();
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
init_withEntity();
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
init_withEntity();
init_withField();
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
init_withEntity();
init_withField();
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
init_withEntity();
var Update = /* @__PURE__ */ __name(({ Resource, name }) => {
  let _Update = /* @__PURE__ */ __name(class _Update extends Resource {
  }, "_Update");
  _Update = (0, import_tslib16.__decorate)([
    withEntity({ name: `${name}Update` })
  ], _Update);
  return _Update;
}, "Update");

// ../lib-backend/src/resource/utils/Args/Args.ts
init_withCondition();

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

// ../lib-backend/src/resource/decorators/withOutput/withOutput.ts
init_withAccess();

// ../lib-backend/src/resource/utils/Output/Output.ts
var import_tslib22 = require("tslib");
init_withEntity();
init_withField();

// ../lib-backend/src/resource/utils/Connection/Connection.ts
var import_tslib21 = require("tslib");
init_withEntity();
init_withField();

// ../lib-backend/src/resource/utils/Edge/Edge.ts
var import_tslib19 = require("tslib");
init_withEntity();
init_withField();
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
init_withEntity();
init_withField();
init_form_constants();
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
init_Access_constants();
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
init_Access_constants();
init_withCondition();
init_withContainer2();
init_NotImplementedError();
init_Container2();
var import_lodash9 = require("lodash");
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
        return this._service.create((0, import_lodash9.toPlainObject)(input));
      }
      throw new NotImplementedError("Create" /* CREATE */);
    }
    async get(input) {
      if (this._service.get) {
        return this._service.get((0, import_lodash9.toPlainObject)(input));
      }
      throw new NotImplementedError("Get" /* GET */);
    }
    async getMany(input) {
      if (this._service.getMany) {
        return this._service.getMany((0, import_lodash9.toPlainObject)(input));
      }
      throw new NotImplementedError("GetMany" /* GET_MANY */);
    }
    async getConnection(input) {
      if (this._service.getConnection) {
        return this._service.getConnection((0, import_lodash9.toPlainObject)(input));
      }
      throw new NotImplementedError("GetConnection" /* GET_CONNECTION */);
    }
    async update(input) {
      if (this._service.update) {
        return this._service.update((0, import_lodash9.toPlainObject)(input));
      }
      throw new NotImplementedError("Update" /* UPDATE */);
    }
    async remove(input) {
      if (this._service.remove) {
        return this._service.remove((0, import_lodash9.toPlainObject)(input));
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
init_withContainer2();
var EntityResourceResolver = /* @__PURE__ */ __name((params) => {
  let _EntityResourceResolver = /* @__PURE__ */ __name(class _EntityResourceResolver extends ResourceResolver(params) {
  }, "_EntityResourceResolver");
  _EntityResourceResolver = (0, import_tslib24.__decorate)([
    withContainer(),
    _withResolver({ isAbstract: true })
  ], _EntityResourceResolver);
  return _EntityResourceResolver;
}, "EntityResourceResolver");

// ../lib-backend/src/auth/resources/Access/AccessResolver/AccessResolver.ts
init_User();

// ../lib-backend/src/user/resources/User/UserService/UserService.ts
var import_tslib25 = require("tslib");
init_withContainer2();
init_User_constants();
var UserService = /* @__PURE__ */ __name(class UserService2 extends EntityResourceService({ name: USER_RESOURCE_NAME }) {
}, "UserService");
UserService = (0, import_tslib25.__decorate)([
  withContainer({ name: `${USER_RESOURCE_NAME}Service` })
], UserService);

// ../lib-backend/src/auth/resources/Access/AccessResolver/AccessResolver.ts
init_Access_constants();
init_withContainer2();

// ../lib-shared/src/core/errors/NotFoundError/NotFoundError.ts
var NotFoundError = class extends Error {
  constructor(value) {
    super(`not found: ${value}`);
  }
};
__name(NotFoundError, "NotFoundError");

// ../lib-backend/src/auth/resources/Access/AccessResolver/AccessResolver.ts
init_Container2();
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
init_Otp();

// ../lib-backend/src/auth/resources/Otp/OtpService/OtpService.ts
var import_tslib27 = require("tslib");

// ../lib-backend/src/file/utils/fromStatic/fromStatic.ts
var fromStatic = /* @__PURE__ */ __name((...paths) => fromPackages("asset-static", ...paths), "fromStatic");

// ../lib-backend/src/mail/utils/mail/_mail.ts
init_logger2();
var import_email_templates = require("email-templates");
var import_lodash10 = require("lodash");
var import_nodemailer = require("nodemailer");
var transport = (0, import_nodemailer.createTransport)({
  auth: { pass: "1pqcTKmYajdAQEFx", user: "ygmindev@gmail.com" },
  host: "smtp-relay.sendinblue.com",
  pool: true,
  port: (0, import_lodash10.toNumber)("587")
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

// ../lib-shared/src/http/errors/HttpError/HttpError.constants.ts
var HTTP_STATUS_CODE = {
  BAD_REQUEST: 400,
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

// ../lib-shared/src/auth/errors/InvalidOtpError/InvalidOtpError.ts
var InvalidOtpError = class extends HttpError {
  constructor(message) {
    super(HTTP_STATUS_CODE.FORBIDDEN, message);
  }
};
__name(InvalidOtpError, "InvalidOtpError");

// ../lib-backend/src/auth/resources/Otp/OtpService/OtpService.ts
init_Otp_constants2();
init_withContainer2();

// ../lib-shared/src/core/decorators/withInject/_withInject.ts
var import_inversify3 = require("inversify");
var _withInject = /* @__PURE__ */ __name((value) => (0, import_inversify3.inject)(value), "_withInject");

// ../lib-backend/src/auth/resources/Otp/OtpService/OtpService.ts
init_DuplicateError();
init_Container2();

// ../lib-shared/src/crypto/utils/randomInt/_randomInt.ts
var import_crypto = require("crypto");
var _randomInt = /* @__PURE__ */ __name((length) => (0, import_crypto.randomInt)(10 ** (length - 1), 10 ** length - 1), "_randomInt");

// ../lib-backend/src/auth/resources/Otp/OtpService/OtpService.ts
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
      throw new InvalidOtpError();
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
init_Access_constants();
init_Otp_constants2();
init_withContainer2();
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
init_withEntity();
init_withField();
init_EntityResource();
init_User();

// ../lib-shared/src/auth/resources/SignIn/SignIn.constants.ts
var SIGN_IN_RESOURCE_NAME = "SignIn";
var USERNAME_UPDATE = `Userename${"Update" /* UPDATE */}`;

// ../lib-backend/src/auth/resources/SignIn/SignIn.ts
init_form_constants();
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
init_withContainer2();
var import_lodash11 = require("lodash");
var _a9;
var _b7;
var _createSignIn = /* @__PURE__ */ __name(async (user) => {
  if (user) {
    const claims = (0, import_lodash11.pick)(user, SIGN_IN_TOKEN_CLAIM_FIELDS);
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
      (0, import_lodash11.unset)(form, "otp");
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
    throw new HttpError(HTTP_STATUS_CODE.BAD_REQUEST, (0, import_lodash11.keys)(form).filter((key) => !form[key]).join(", "));
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
    throw new HttpError(HTTP_STATUS_CODE.BAD_REQUEST, (0, import_lodash11.keys)(form).filter((key) => !form[key]).join(", "));
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
var import_type_graphql10 = require("type-graphql");
var _withContext = /* @__PURE__ */ __name(() => (target, propertyKey, parameterIndex) => (0, import_type_graphql10.Ctx)()(target, propertyKey, parameterIndex), "_withContext");

// ../lib-backend/src/auth/resources/SignIn/SignInResolver/SignInResolver.ts
init_Access_constants();
init_withContainer2();
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
  withOutput({ Resource: SignIn, method: "Update" /* UPDATE */, name: USERNAME_UPDATE }),
  (0, import_tslib31.__param)(0, withInput({ Resource: SignInForm, method: "Update" /* UPDATE */, name: USERNAME_UPDATE })),
  (0, import_tslib31.__param)(1, _withContext()),
  (0, import_tslib31.__metadata)("design:type", Function),
  (0, import_tslib31.__metadata)("design:paramtypes", [Object, Object]),
  (0, import_tslib31.__metadata)("design:returntype", typeof (_b8 = typeof Promise !== "undefined" && Promise) === "function" ? _b8 : Object)
], SignInResolver.prototype, "usernameUpdate", null);
SignInResolver = (0, import_tslib31.__decorate)([
  withContainer(),
  _withResolver({ Resource: SignIn })
], SignInResolver);

// ../lib-backend/src/auth/utils/authorize/authorize.ts
init_Access_constants();
init_Container2();
var authorize = /* @__PURE__ */ __name(async ({ context, roles }) => {
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
}, "authorize");

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserResolver/LinkedUserResolver.ts
var import_tslib35 = require("tslib");

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver.ts
var import_tslib32 = require("tslib");
init_withContainer2();
var EmbeddedResourceResolver = /* @__PURE__ */ __name((params) => {
  let _EmbeddedResourceResolver = /* @__PURE__ */ __name(class _EmbeddedResourceResolver extends ResourceResolver(params) {
  }, "_EmbeddedResourceResolver");
  _EmbeddedResourceResolver = (0, import_tslib32.__decorate)([
    withContainer(),
    _withResolver({ isAbstract: true })
  ], _EmbeddedResourceResolver);
  return _EmbeddedResourceResolver;
}, "EmbeddedResourceResolver");

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserResolver/LinkedUserResolver.ts
init_LinkedUser();

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserService/LinkedUserService.ts
var import_tslib34 = require("tslib");

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.ts
var import_tslib33 = require("tslib");
init_getConnection();
init_EmbeddedResource();
init_withContainer2();
init_InvalidArgumentError();
init_Container2();

// ../lib-shared/src/core/utils/flattenObject/flattenObject.ts
var import_lodash12 = require("lodash");
var flattenObject = /* @__PURE__ */ __name(({
  value,
  path = [],
  delimiter = ".",
  prefixes = ["$"]
}) => (0, import_lodash12.isPlainObject)(value) ? (0, import_lodash12.reduce)(
  value,
  (result, v, k) => (0, import_lodash12.some)(prefixes, (prefix) => k.startsWith(prefix)) ? { ...result, [[...path, k].join(delimiter)]: v } : {
    ...result,
    ...flattenObject({ delimiter, path: [...path, k], prefixes, value: v })
  },
  {}
) : path.length ? { [path.join(delimiter)]: value } : value, "flattenObject");

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.ts
init_isEmpty();
var import_lodash13 = require("lodash");
var EmbeddedResourceService = /* @__PURE__ */ __name(({ RootService, afterCreate, afterGet, afterGetConnection, afterGetMany, afterRemove, afterUpdate, beforeCreate, beforeGet, beforeGetConnection, beforeGetMany, beforeRemove, beforeUpdate, name }) => {
  const _beforeCreate = /* @__PURE__ */ __name(async (input) => {
    const value = new EmbeddedResource();
    (0, import_lodash13.forEach)(input.form, (v, k) => value[k] = v);
    value.beforeCreate && await value.beforeCreate();
    return { ...input, form: value };
  }, "_beforeCreate");
  const _getCondition = /* @__PURE__ */ __name((value) => {
    if (isEmpty(value)) {
      return {};
    }
    if ((0, import_lodash13.isPlainObject)(value)) {
      const cond = (0, import_lodash13.map)(value, (v, k) => v === Object(v) ? { [k]: _getCondition(v) } : { $eq: [`$$value.${k}`, v] });
      return cond.length > 1 ? { $and: cond } : cond[0];
    }
    return (0, import_lodash13.isArray)(value) ? value.map(_getCondition) : value;
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
          update: (0, import_lodash13.reduce)(_input.update, (result2, v, k) => ({
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
init_withContainer2();
init_LinkedUser_constants();
var LinkedUserService = /* @__PURE__ */ __name(class LinkedUserService2 extends EmbeddedResourceService({
  RootService: UserService,
  name: LINKED_USER_RESOURCE_NAME
}) {
}, "LinkedUserService");
LinkedUserService = (0, import_tslib34.__decorate)([
  withContainer()
], LinkedUserService);

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserResolver/LinkedUserResolver.ts
init_User();
init_withContainer2();
init_LinkedUser_constants();
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
init_User();
init_Access_constants();
init_withContainer2();
init_User_constants();
var UserResolver = /* @__PURE__ */ __name(class UserResolver2 extends EntityResourceResolver({
  Resource: User,
  ResourceService: UserService,
  getAccess: "PUBLIC" /* PUBLIC */,
  name: USER_RESOURCE_NAME
}) {
}, "UserResolver");
UserResolver = (0, import_tslib36.__decorate)([
  withContainer(),
  _withResolver({ Resource: User })
], UserResolver);

// ../lib-config/src/http/graphql/configs/graphql.config.ts
init_Container2();
var graphqlConfig = {
  authorize,
  container: _Container,
  resolvers: [AccessResolver, OtpResolver, LinkedUserResolver, SignInResolver, UserResolver],
  schemaPath: fromStatic("graphql/schema.gql")
};

// ../lib-config/src/http/graphql/graphql.config.ts
var graphqlConfig2 = _graphqlConfig(graphqlConfig);

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9Db250YWluZXIvX0NvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL2NsZWFuRG9jdW1lbnQvY2xlYW5Eb2N1bWVudC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZGF0YWJhc2UvdXRpbHMvZ2V0Q29ubmVjdGlvbi9nZXRDb25uZWN0aW9uLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9kYXRhYmFzZS9fZGF0YWJhc2UuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0R1cGxpY2F0ZUVycm9yL0R1cGxpY2F0ZUVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL1VuaW5pdGlhbGl6ZWRFcnJvci9VbmluaXRpYWxpemVkRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvZm9ybWF0dGluZy91dGlscy9kYXRlVGltZUZvcm1hdC9fZGF0ZVRpbWVGb3JtYXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvZm9ybWF0dGluZy91dGlscy9kYXRlVGltZUZvcm1hdC9kYXRlVGltZUZvcm1hdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9mb3JtYXR0aW5nL3V0aWxzL2RhdGVUaW1lRm9ybWF0L2RhdGVUaW1lRm9ybWF0LmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9sb2dnaW5nL3V0aWxzL2xvZ2dlci9fbG9nZ2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL2xvZ2dlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvX0RhdGFiYXNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9Ob3RJbXBsZW1lbnRlZEVycm9yL05vdEltcGxlbWVudGVkRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEVudGl0eS93aXRoRW50aXR5LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2Zvcm0vZm9ybS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSG9vay93aXRoSG9vay5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvSW52YWxpZEFyZ3VtZW50RXJyb3IvSW52YWxpZEFyZ3VtZW50RXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEhvb2svd2l0aEhvb2sudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9pc0VtcHR5L2lzRW1wdHkudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW1iZWRkZWRSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXIuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL090cC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9kZWNvcmF0b3JzL3dpdGhDb25kaXRpb24vd2l0aENvbmRpdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoQWNjZXNzL3dpdGhBY2Nlc3MudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL090cC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW1iZWRkZWRSZXNvdXJjZS9EdW1teUVtYmVkZGVkUmVzb3VyY2UuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy90ZXN0L3Jlc291cmNlcy9EdW1teUVtYmVkZGVkUmVzb3VyY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy90ZXN0L3Jlc291cmNlcy9EdW1teUVudGl0eVJlc291cmNlL0R1bW15RW50aXR5UmVzb3VyY2UuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy90ZXN0L3Jlc291cmNlcy9EdW1teUVudGl0eVJlc291cmNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvZGF0YWJhc2UvZGF0YWJhc2UuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2RhdGFiYXNlL2NvbmZpZ3MvZGF0YWJhc2UuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL193aXRoQ29udGFpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlTWFpbi9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uL3NyYy9ub2RlL2dyYXBocWwvZ3JhcGhxbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvbGFtYmRhL3V0aWxzL2NyZWF0ZUhhbmRsZXIvX2NyZWF0ZUhhbmRsZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4uY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3V0aWxzL0p3dFNlcnZpY2UvX0p3dFNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2xhbWJkYS91dGlscy9nZXRDb250ZXh0L19nZXRDb250ZXh0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9zZXR1cC91dGlscy9pbml0aWFsaXplL2luaXRpYWxpemUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvc2V0dXAvdXRpbHMvaW5pdGlhbGl6ZS9pbml0aWFsaXplLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvaHR0cC9ncmFwaHFsL19ncmFwaHFsLmNvbmZpZy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1Jlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UvRW50aXR5UmVzb3VyY2VTZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2h0dHAvZGVjb3JhdG9ycy93aXRoRmllbGRSZXNvbHZlci9fd2l0aEZpZWxkUmVzb2x2ZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2h0dHAvZGVjb3JhdG9ycy93aXRoUmVzb2x2ZXIvX3dpdGhSZXNvbHZlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhTZWxmL193aXRoU2VsZi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvSW5wdXQvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvQXJncy9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9GaWx0ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvRm9ybS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9QYWdpbmF0aW9uL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1Jvb3QvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvVXBkYXRlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvSW52YWxpZFR5cGVFcnJvci9JbnZhbGlkVHlwZUVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSW5wdXQvd2l0aElucHV0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhPdXRwdXQvd2l0aE91dHB1dC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0Nvbm5lY3Rpb24vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvRWRnZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9QYWdlSW5mby9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9SZXN1bHQvUmVzdWx0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9SZXNvdXJjZS9SZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlclNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9Ob3RGb3VuZEVycm9yL05vdEZvdW5kRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9PdHBSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21TdGF0aWMvZnJvbVN0YXRpYy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvbWFpbC91dGlscy9tYWlsL19tYWlsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9lcnJvcnMvSW52YWxpZE90cEVycm9yL0ludmFsaWRPdHBFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL090cFNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aEluamVjdC9fd2l0aEluamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jcnlwdG8vdXRpbHMvcmFuZG9tSW50L19yYW5kb21JbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4uY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9odHRwL2RlY29yYXRvcnMvd2l0aENvbnRleHQvX3dpdGhDb250ZXh0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC91dGlscy9hdXRob3JpemUvYXV0aG9yaXplLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW1iZWRkZWRSZXNvdXJjZS9FbWJlZGRlZFJlc291cmNlUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvRW1iZWRkZWRSZXNvdXJjZVNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2ZsYXR0ZW5PYmplY3QvZmxhdHRlbk9iamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXJSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2h0dHAvZ3JhcGhxbC9jb25maWdzL2dyYXBocWwuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2h0dHAvZ3JhcGhxbC9ncmFwaHFsLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgX0NvbnRhaW5lck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvX0NvbnRhaW5lci5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnaW52ZXJzaWZ5JztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBjb250YWluZXIgPSBuZXcgQ29udGFpbmVyKHtcbiAgYXV0b0JpbmRJbmplY3RhYmxlOiB0cnVlLFxuICBkZWZhdWx0U2NvcGU6ICdTaW5nbGV0b24nLFxuICBza2lwQmFzZUNsYXNzQ2hlY2tzOiB0cnVlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBfQ29udGFpbmVyOiBfQ29udGFpbmVyTW9kZWwgPSB7XG4gIGdldDogPFRUeXBlPih0eXBlOiBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPiB8IHN0cmluZyk6IFRUeXBlID0+IGNvbnRhaW5lci5nZXQodHlwZSksXG5cbiAgc2V0OiA8VFR5cGU+KFxuICAgIHR5cGU6IENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+IHwgc3RyaW5nLFxuICAgIHZhbHVlOiBUVHlwZSB8IENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+LFxuICApOiB2b2lkID0+IHtcbiAgICBpc0Z1bmN0aW9uKHZhbHVlKVxuICAgICAgPyBjb250YWluZXIuYmluZDxUVHlwZT4odHlwZSkudG8odmFsdWUgYXMgQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4pXG4gICAgICA6IGNvbnRhaW5lci5iaW5kPFRUeXBlPih0eXBlKS50b0R5bmFtaWNWYWx1ZSgoKSA9PiB2YWx1ZSBhcyBUVHlwZSk7XG4gIH0sXG59O1xuXG4iLCAiXG5leHBvcnQgeyBfQ29udGFpbmVyIGFzIENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL19Db250YWluZXInO1xuXG4iLCAiXG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0LCBpc1N0cmluZywga2V5cywgdG9QbGFpbk9iamVjdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuXG5leHBvcnQgY29uc3QgY2xlYW5Eb2N1bWVudCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHZhbHVlOiBUVHlwZSk6IFRUeXBlID0+IHtcbiAgY29uc3QgX3ZhbHVlID0gdG9QbGFpbk9iamVjdCh2YWx1ZSk7XG4gIGtleXMoX3ZhbHVlKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgY29uc3QgdiA9IChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdO1xuICAgIGlzUGxhaW5PYmplY3QodikgJiYgKChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdID0gY2xlYW5Eb2N1bWVudCh2KSk7XG4gICAgaXNTdHJpbmcoaykgJiZcbiAgICAgIGsuc3RhcnRzV2l0aCgnXycpICYmXG4gICAgICBpc1N0cmluZyh2KSAmJlxuICAgICAgKChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdID0gbmV3IE9iamVjdElkKHYpKTtcbiAgICB2ID09PSB1bmRlZmluZWQgJiYgZGVsZXRlIChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdO1xuICB9KTtcbiAgcmV0dXJuIF92YWx1ZTtcbn07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgR2V0Q29ubmVjdGlvblBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL2dldENvbm5lY3Rpb24vZ2V0Q29ubmVjdGlvbi5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25uZWN0aW9uTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9Db25uZWN0aW9uL0Nvbm5lY3Rpb24ubW9kZWxzJztcbmltcG9ydCB7IGdldE9mZnNldFdpdGhEZWZhdWx0LCBvZmZzZXRUb0N1cnNvciB9IGZyb20gJ2dyYXBocWwtcmVsYXknO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29ubmVjdGlvbiA9IGFzeW5jIDxUVHlwZSwgVEZvcm0sIFRSb290ID0gdW5kZWZpbmVkPih7XG4gIGNvdW50LFxuICBnZXRNYW55LFxuICBpbnB1dCxcbiAgcGFnaW5hdGlvbixcbn06IEdldENvbm5lY3Rpb25QYXJhbXNNb2RlbDxUVHlwZSwgVEZvcm0sIFRSb290Pik6IFByb21pc2U8Q29ubmVjdGlvbk1vZGVsPFRUeXBlPiB8IHVuZGVmaW5lZD4gPT4ge1xuICBjb25zdCB7IGFmdGVyLCBiZWZvcmUsIGZpcnN0LCBsYXN0IH0gPSBwYWdpbmF0aW9uO1xuICBjb25zdCBiZWZvcmVPZmZzZXQgPSBnZXRPZmZzZXRXaXRoRGVmYXVsdChiZWZvcmUsIGNvdW50KTtcbiAgY29uc3QgYWZ0ZXJPZmZzZXQgPSBnZXRPZmZzZXRXaXRoRGVmYXVsdChhZnRlciwgLTEpO1xuICBsZXQgc3RhcnRPZmZzZXQgPSBNYXRoLm1heCgtMSwgYWZ0ZXJPZmZzZXQpICsgMTtcbiAgbGV0IGVuZE9mZnNldCA9IE1hdGgubWluKGJlZm9yZU9mZnNldCwgY291bnQpO1xuICBpZiAoZmlyc3QpIHtcbiAgICBlbmRPZmZzZXQgPSBNYXRoLm1pbihlbmRPZmZzZXQsIHN0YXJ0T2Zmc2V0ICsgZmlyc3QpO1xuICB9XG4gIGlmIChsYXN0KSB7XG4gICAgc3RhcnRPZmZzZXQgPSBNYXRoLm1heChzdGFydE9mZnNldCwgZW5kT2Zmc2V0IC0gbGFzdCk7XG4gIH1cbiAgY29uc3Qgc2tpcCA9IE1hdGgubWF4KHN0YXJ0T2Zmc2V0LCAwKTtcbiAgY29uc3QgdGFrZSA9IE1hdGgubWF4KGVuZE9mZnNldCAtIHN0YXJ0T2Zmc2V0LCAxKTtcbiAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IGdldE1hbnkoeyAuLi5pbnB1dCwgb3B0aW9uczogeyBza2lwLCB0YWtlIH0gfSk7XG5cbiAgaWYgKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoKSB7XG4gICAgY29uc3QgZWRnZXMgPSByZXN1bHQubWFwKChub2RlLCBpbmRleCkgPT4gKHtcbiAgICAgIGN1cnNvcjogb2Zmc2V0VG9DdXJzb3Ioc3RhcnRPZmZzZXQgKyBpbmRleCksXG4gICAgICBub2RlLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IHsgMDogZmlyc3RFZGdlLCBsZW5ndGgsIFtsZW5ndGggLSAxXTogbGFzdEVkZ2UgfSA9IGVkZ2VzO1xuICAgIGNvbnN0IGxvd2VyQm91bmQgPSBhZnRlciA/IGFmdGVyT2Zmc2V0ICsgMSA6IDA7XG4gICAgY29uc3QgdXBwZXJCb3VuZCA9IGJlZm9yZSA/IE1hdGgubWluKGJlZm9yZU9mZnNldCwgY291bnQpIDogY291bnQ7XG5cbiAgICBjb25zdCBwYWdlSW5mbyA9IHtcbiAgICAgIGVuZEN1cnNvcjogbGFzdEVkZ2UuY3Vyc29yLFxuICAgICAgaGFzTmV4dFBhZ2U6IGZpcnN0ID8gZW5kT2Zmc2V0IDwgdXBwZXJCb3VuZCA6IGZhbHNlLFxuICAgICAgaGFzUHJldmlvdXNQYWdlOiBsYXN0ID8gc3RhcnRPZmZzZXQgPiBsb3dlckJvdW5kIDogZmFsc2UsXG4gICAgICBzdGFydEN1cnNvcjogZmlyc3RFZGdlLmN1cnNvcixcbiAgICB9O1xuICAgIHJldHVybiB7IGVkZ2VzLCBwYWdlSW5mbyB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgZWRnZXM6IFtdLFxuICAgIHBhZ2VJbmZvOiB7IGVuZEN1cnNvcjogJycsIGhhc05leHRQYWdlOiBmYWxzZSwgaGFzUHJldmlvdXNQYWdlOiBmYWxzZSwgc3RhcnRDdXJzb3I6ICcnIH0sXG4gIH07XG59O1xuXG4iLCAiXG5leHBvcnQgZW51bSBFTlZJUk9OTUVOVCB7XG4gIERFVkVMT1BNRU5UID0gJ2RldmVsb3BtZW50JyxcbiAgUFJPRFVDVElPTiA9ICdwcm9kdWN0aW9uJyxcbiAgVEVTVCA9ICd0ZXN0Jyxcbn1cblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfRGF0YWJhc2VDb25maWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL19kYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgRU5WSVJPTk1FTlQgfSBmcm9tICdAbGliL3NoYXJlZC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBPcHRpb25zIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlL3V0aWxzJztcbmltcG9ydCB0eXBlIHsgTW9uZ29Ecml2ZXIgfSBmcm9tICdAbWlrcm8tb3JtL21vbmdvZGInO1xuXG5leHBvcnQgY29uc3QgX2RhdGFiYXNlQ29uZmlnID0gKHtcbiAgZGF0YWJhc2UsXG4gIGVudGl0aWVzLFxuICBob3N0LFxuICBwYXNzd29yZCxcbiAgcG9vbCxcbiAgdHlwZSxcbiAgdXNlcm5hbWUsXG59OiBfRGF0YWJhc2VDb25maWdQYXJhbXNNb2RlbCk6IE9wdGlvbnM8TW9uZ29Ecml2ZXI+ID0+ICh7XG4gIGNsaWVudFVybDogaG9zdCxcbiAgZGJOYW1lOiBkYXRhYmFzZSxcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBFTlZJUk9OTUVOVC5QUk9EVUNUSU9OLFxuICBlbnN1cmVJbmRleGVzOiB0cnVlLFxuICBlbnRpdGllcyxcbiAgcGFzc3dvcmQ6IHBhc3N3b3JkIHx8IHVuZGVmaW5lZCxcbiAgcG9vbDogeyBtYXg6IHBvb2wubWF4LCBtaW46IDAgfSxcbiAgdHlwZSxcbiAgdXNlcjogdXNlcm5hbWUgfHwgdW5kZWZpbmVkLFxufSk7XG5cbiIsICJcbmV4cG9ydCBjbGFzcyBEdXBsaWNhdGVFcnJvciBleHRlbmRzIEVycm9yIHt9XG5cbiIsICJcbmV4cG9ydCBjbGFzcyBVbmluaXRpYWxpemVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgbm90IGluaXRpYWxpemVkOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX0RhdGVUaW1lRm9ybWF0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtYXR0aW5nL3V0aWxzL2RhdGVUaW1lRm9ybWF0L19kYXRlVGltZUZvcm1hdC5tb2RlbHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgY29uc3QgX2RhdGVUaW1lRm9ybWF0ID0gKHsgZm9ybWF0LCB2YWx1ZSB9OiBfRGF0ZVRpbWVGb3JtYXRQYXJhbXNNb2RlbCk6IHN0cmluZyA9PlxuICBtb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpO1xuXG4iLCAiXG5leHBvcnQgeyBfZGF0ZVRpbWVGb3JtYXQgYXMgZGF0ZVRpbWVGb3JtYXQgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtYXR0aW5nL3V0aWxzL2RhdGVUaW1lRm9ybWF0L19kYXRlVGltZUZvcm1hdCc7XG5cbiIsICJcbmV4cG9ydCBlbnVtIERBVEVfVElNRV9GT1JNQVRfVFlQRSB7XG4gIERBVEUgPSAnTU0vREQvWVlZWScsXG4gIERBVEVfVElNRV9NSU5VVEVTID0gJ01NL0REL1lZWVkgSEg6bW0nLFxuICBEQVRFX1RJTUVfU0VDT05EUyA9ICdNTS9ERC9ZWVlZIEhIOm1tOnNzJyxcbiAgREFURV9USU1FX1NFQ09ORFNfU0hPUlQgPSAnTU0vREQvWVkgSEg6bW06c3MnLFxuICBUSU1FX01JTlVURVMgPSAnSEg6bW0nLFxuICBUSU1FX1NFQ09ORFMgPSAnSEg6bW06c3MnLFxuICBZRUFSID0gJ1lZWVknLFxufVxuXG4iLCAiXG5pbXBvcnQgeyBkYXRlVGltZUZvcm1hdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm1hdHRpbmcvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvZGF0ZVRpbWVGb3JtYXQnO1xuaW1wb3J0IHsgREFURV9USU1FX0ZPUk1BVF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybWF0dGluZy91dGlscy9kYXRlVGltZUZvcm1hdC9kYXRlVGltZUZvcm1hdC5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBfTG9nZ2VyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9fbG9nZ2VyLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IExvZ2dlciB9IGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyLCBmb3JtYXQsIHRyYW5zcG9ydHMgfSBmcm9tICd3aW5zdG9uJztcblxuY29uc3QgX2VudW1lcmF0ZUVycm9yRm9ybWF0ID0gZm9ybWF0KChpbmZvKSA9PiB7XG4gIGlmIChpbmZvIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICBPYmplY3QuYXNzaWduKGluZm8sIHsgbWVzc2FnZTogaW5mby5zdGFjayB9KTtcbiAgfVxuICByZXR1cm4gaW5mbztcbn0pO1xuXG5jb25zdCBsb2dnZXI6IExvZ2dlciA9IGNyZWF0ZUxvZ2dlcih7XG4gIGZvcm1hdDogZm9ybWF0LmNvbWJpbmUoXG4gICAgX2VudW1lcmF0ZUVycm9yRm9ybWF0KCksXG4gICAgZm9ybWF0LmNvbG9yaXplKCksXG4gICAgZm9ybWF0LnNwbGF0KCksXG4gICAgZm9ybWF0LnByaW50ZihcbiAgICAgICh7IGxldmVsLCBtZXNzYWdlIH06IHsgbGV2ZWw6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nIH0pID0+XG4gICAgICAgIGBbJHtkYXRlVGltZUZvcm1hdCh7XG4gICAgICAgICAgZm9ybWF0OiBEQVRFX1RJTUVfRk9STUFUX1RZUEUuREFURV9USU1FX1NFQ09ORFNfU0hPUlQsXG4gICAgICAgIH0pfV0gJHtsZXZlbH06ICR7bWVzc2FnZX1gLFxuICAgICksXG4gICksXG4gIGxldmVsOiAnaW5mbycsXG4gIHRyYW5zcG9ydHM6IFtuZXcgdHJhbnNwb3J0cy5Db25zb2xlKHsgc3RkZXJyTGV2ZWxzOiBbJ2Vycm9yJ10gfSldLFxufSk7XG5cbmNvbnN0IHsgX2RlYnVnLCBfZXJyb3IsIF9pbmZvLCBfd2FybiB9OiBfTG9nZ2VyTW9kZWwgPSB7XG4gIF9kZWJ1ZzogKG1lc3NhZ2UpID0+IGxvZ2dlci5kZWJ1Zy5iaW5kKGxvZ2dlcikobWVzc2FnZSksXG4gIF9lcnJvcjogKG1lc3NhZ2UpID0+IGxvZ2dlci5lcnJvci5iaW5kKGxvZ2dlcikobWVzc2FnZSksXG4gIF9pbmZvOiAobWVzc2FnZSkgPT4gbG9nZ2VyLmluZm8uYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxuICBfd2FybjogKG1lc3NhZ2UpID0+IGxvZ2dlci53YXJuLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbn07XG5cbmV4cG9ydCB7IF9kZWJ1ZywgX2Vycm9yLCBfaW5mbywgX3dhcm4gfTtcblxuIiwgIlxuZXhwb3J0IHtcbiAgX2RlYnVnIGFzIGRlYnVnLFxuICBfZXJyb3IgYXMgZXJyb3IsXG4gIF9pbmZvIGFzIGluZm8sXG4gIF93YXJuIGFzIHdhcm4sXG59IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL19sb2dnZXInO1xuXG4iLCAiXG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuXG5pbXBvcnQgeyBjbGVhbkRvY3VtZW50IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL2NsZWFuRG9jdW1lbnQvY2xlYW5Eb2N1bWVudCc7XG5pbXBvcnQgdHlwZSB7XG4gIERhdGFiYXNlTW9kZWwsXG4gIERhdGFiYXNlUGFyYW1zTW9kZWwsXG4gIFJlcG9zaXRvcnlNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgeyBnZXRDb25uZWN0aW9uIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL2dldENvbm5lY3Rpb24vZ2V0Q29ubmVjdGlvbic7XG5pbXBvcnQgeyBfZGF0YWJhc2VDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9fZGF0YWJhc2UuY29uZmlnJztcbmltcG9ydCB7IER1cGxpY2F0ZUVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvRHVwbGljYXRlRXJyb3IvRHVwbGljYXRlRXJyb3InO1xuaW1wb3J0IHsgVW5pbml0aWFsaXplZEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvVW5pbml0aWFsaXplZEVycm9yL1VuaW5pdGlhbGl6ZWRFcnJvcic7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL2xvZ2dlcic7XG5pbXBvcnQgdHlwZSB7IFdpdGhSZXNvdXJjZU5hbWVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aFJlc291cmNlTmFtZS93aXRoUmVzb3VyY2VOYW1lLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgT3V0cHV0TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9PdXRwdXQvT3V0cHV0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJlc3VsdE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvUmVzdWx0L1Jlc3VsdC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBGaWx0ZXJRdWVyeSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBNaWtyb09STSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eU1hbmFnZXIsIE1vbmdvRHJpdmVyIH0gZnJvbSAnQG1pa3JvLW9ybS9tb25nb2RiJztcbmltcG9ydCB7IGdldCwga2V5cywgc2V0LCB1bnNldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfRGF0YWJhc2UgaW1wbGVtZW50cyBEYXRhYmFzZU1vZGVsIHtcbiAgcHJvdGVjdGVkIF9wYXJhbXM6IERhdGFiYXNlUGFyYW1zTW9kZWw7XG4gIHByb3RlY3RlZCBfZW50aXR5TWFuYWdlcj86IEVudGl0eU1hbmFnZXI7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zOiBEYXRhYmFzZVBhcmFtc01vZGVsKSB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgYXN5bmMgaW5pdGlhbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9lbnRpdHlNYW5hZ2VyID1cbiAgICAgIHRoaXMuX2VudGl0eU1hbmFnZXIgfHwgKGF3YWl0IE1pa3JvT1JNLmluaXQ8TW9uZ29Ecml2ZXI+KF9kYXRhYmFzZUNvbmZpZyh0aGlzLl9wYXJhbXMpKSkuZW07XG4gIH1cblxuICBfZ2V0RW50aXR5TWFuYWdlciA9ICgpOiBFbnRpdHlNYW5hZ2VyID0+IHtcbiAgICBjb25zdCBfZW0gPSB0aGlzLl9lbnRpdHlNYW5hZ2VyO1xuICAgIGlmIChfZW0pIHtcbiAgICAgIHJldHVybiBfZW0uZm9yaygpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVW5pbml0aWFsaXplZEVycm9yKGBkYXRhYmFzZSAke3RoaXMuX3BhcmFtcy5ob3N0fWApO1xuICB9O1xuXG4gIGdldFJlcG9zaXRvcnkgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gICAgbmFtZSxcbiAgfTogV2l0aFJlc291cmNlTmFtZU1vZGVsKTogUmVwb3NpdG9yeU1vZGVsPFRUeXBlPiA9PiB7XG4gICAgY29uc3QgX3NlcnZpY2U6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPSB7XG4gICAgICBjbGVhcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKClcbiAgICAgICAgICAuZ2V0UmVwb3NpdG9yeTxUVHlwZSAmIG9iamVjdD4obmFtZSlcbiAgICAgICAgICAubmF0aXZlRGVsZXRlKHt9IGFzIEZpbHRlclF1ZXJ5PFRUeXBlICYgb2JqZWN0Pik7XG4gICAgICB9LFxuICAgICAgY291bnQ6IGFzeW5jICgpID0+IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKS5jb3VudCgpLFxuXG4gICAgICBjcmVhdGU6IGFzeW5jICh7IGZvcm0gfSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IF9mb3JtID0gY2xlYW5Eb2N1bWVudChmb3JtKSBhcyBUVHlwZSAmIG9iamVjdDtcbiAgICAgICAgICBjb25zdCBfcmVwb3NpdG9yeSA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBfcmVwb3NpdG9yeS5jcmVhdGUoX2Zvcm0pO1xuICAgICAgICAgIGF3YWl0IF9yZXBvc2l0b3J5LnBlcnNpc3QocmVzdWx0KS5mbHVzaCgpO1xuICAgICAgICAgIHJldHVybiB7IHJlc3VsdCB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgc3dpdGNoIChnZXQoZSwgJ2NvZGUnKSBhcyB1bmtub3duIGFzIG51bWJlcikge1xuICAgICAgICAgICAgY2FzZSAxMTAwMDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IER1cGxpY2F0ZUVycm9yKG5hbWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGdldDogYXN5bmMgKHsgZmlsdGVyLCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBvYmplY3Q7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0Q29sbGVjdGlvbihuYW1lKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IChvcHRpb25zICYmIG9wdGlvbnMuYWdncmVnYXRlXG4gICAgICAgICAgPyBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIC5hZ2dyZWdhdGUoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgeyAkbWF0Y2g6IF9maWx0ZXIgfSxcbiAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9qZWN0ICYmIHsgJHByb2plY3Q6IG9wdGlvbnMucHJvamVjdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnMuYWdncmVnYXRlIHx8IFtdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIDogW10pLFxuICAgICAgICAgICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pIGFzIHVua25vd24gYXMgRG9jdW1lbnRbXSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAubmV4dCgpXG4gICAgICAgICAgOiBjb2xsZWN0aW9uLmZpbmRPbmUoX2ZpbHRlciwgb3B0aW9ucyAmJiB7IHByb2plY3Rpb246IG9wdGlvbnMucHJvamVjdCB9KSkpIGFzIFRUeXBlO1xuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHJlc3VsdCB8fCB1bmRlZmluZWQgfTtcbiAgICAgIH0sXG5cbiAgICAgIGdldENvbm5lY3Rpb246IGFzeW5jICh7IGZpbHRlciwgcGFnaW5hdGlvbiB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcik7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldENvbm5lY3Rpb24oe1xuICAgICAgICAgIGNvdW50OiBhd2FpdCBfc2VydmljZS5jb3VudCgpLFxuICAgICAgICAgIGdldE1hbnk6IF9zZXJ2aWNlLmdldE1hbnksXG4gICAgICAgICAgaW5wdXQ6IHsgZmlsdGVyOiBfZmlsdGVyIH0sXG4gICAgICAgICAgcGFnaW5hdGlvbixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0IHx8IHVuZGVmaW5lZCB9O1xuICAgICAgfSxcblxuICAgICAgZ2V0TWFueTogYXN5bmMgKHsgZmlsdGVyLCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRDb2xsZWN0aW9uKG5hbWUpO1xuICAgICAgICBjb25zdCBfZmlsdGVyID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIG9iamVjdDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IChvcHRpb25zICYmIG9wdGlvbnMuYWdncmVnYXRlXG4gICAgICAgICAgPyBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIC5hZ2dyZWdhdGUoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgeyAkbWF0Y2g6IF9maWx0ZXIgfSxcbiAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9qZWN0ICYmIHsgJHByb2plY3Q6IG9wdGlvbnMucHJvamVjdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50YWtlICYmIHsgJGxpbWl0OiBvcHRpb25zLnRha2UgKyAob3B0aW9ucy5za2lwIHx8IDApIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnNraXAgJiYgeyAkc2tpcDogb3B0aW9ucy5za2lwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4ob3B0aW9ucy5hZ2dyZWdhdGUgfHwgW10pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgOiBbXSksXG4gICAgICAgICAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikgYXMgdW5rbm93biBhcyBEb2N1bWVudFtdLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgICA6IGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgLmZpbmQoXG4gICAgICAgICAgICAgICAgX2ZpbHRlcixcbiAgICAgICAgICAgICAgICBvcHRpb25zICYmIHsgbGltaXQ6IG9wdGlvbnMudGFrZSwgcHJvamVjdGlvbjogb3B0aW9ucy5wcm9qZWN0LCBza2lwOiBvcHRpb25zLnNraXAgfSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAudG9BcnJheSgpKSkgYXMgQXJyYXk8VFR5cGU+O1xuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHJlc3VsdCB8fCB1bmRlZmluZWQgfTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogYXN5bmMgKHsgZmlsdGVyIH0pID0+IHtcbiAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBGaWx0ZXJRdWVyeTxUVHlwZSAmIG9iamVjdD47XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IGF3YWl0IF9zZXJ2aWNlLmdldCh7IGZpbHRlciB9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldFJlcG9zaXRvcnk8VFR5cGUgJiBvYmplY3Q+KG5hbWUpLm5hdGl2ZURlbGV0ZShfZmlsdGVyKTtcbiAgICAgICAgcmV0dXJuIGVudGl0eSBhcyB1bmtub3duIGFzIE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRSwgVFR5cGU+O1xuICAgICAgfSxcbiAgICAgIHVwZGF0ZTogYXN5bmMgKHsgZmlsdGVyLCBvcHRpb25zLCB1cGRhdGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBfZW0gPSB0aGlzLl9lbnRpdHlNYW5hZ2VyO1xuICAgICAgICBpZiAoX2VtKSB7XG4gICAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBvYmplY3Q7XG4gICAgICAgICAgY29uc3QgX3VwZGF0ZSA9IGNsZWFuRG9jdW1lbnQodXBkYXRlKSBhcyBvYmplY3Q7XG4gICAgICAgICAga2V5cyhfdXBkYXRlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IF92YWx1ZSA9IChfdXBkYXRlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrZXldO1xuICAgICAgICAgICAga2V5LnN0YXJ0c1dpdGgoJyQnKSB8fCAodW5zZXQoX3VwZGF0ZSwga2V5KSAmJiBzZXQoX3VwZGF0ZSwgJyRzZXQnLCB7IFtrZXldOiBfdmFsdWUgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IChcbiAgICAgICAgICAgIGF3YWl0IF9lbVxuICAgICAgICAgICAgICAuZm9yayh7fSlcbiAgICAgICAgICAgICAgLmdldENvbm5lY3Rpb24oKVxuICAgICAgICAgICAgICAuZ2V0Q29sbGVjdGlvbjxUVHlwZSAmIG9iamVjdD4obmFtZSlcbiAgICAgICAgICAgICAgLmZpbmRPbmVBbmRVcGRhdGUoX2ZpbHRlciwgX3VwZGF0ZSwge1xuICAgICAgICAgICAgICAgIHByb2plY3Rpb246IG9wdGlvbnM/LnByb2plY3QsXG4gICAgICAgICAgICAgICAgcmV0dXJuRG9jdW1lbnQ6ICdhZnRlcicsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgKS52YWx1ZSBhcyBSZXN1bHRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEUsIFRUeXBlPjtcblxuICAgICAgICAgIHJldHVybiB7IHJlc3VsdCB9O1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBVbmluaXRpYWxpemVkRXJyb3IoYGRhdGFiYXNlICR7dGhpcy5fcGFyYW1zLmhvc3R9YCk7XG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIF9zZXJ2aWNlO1xuICB9O1xuXG4gIGNsb3NlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGRlYnVnKCdDbG9zaW5nIGRhdGFiYXNlIGNvbm5lY3Rpb25zJyk7XG4gICAgYXdhaXQgdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldENvbm5lY3Rpb24oKS5jbG9zZSgpO1xuICB9O1xufVxuXG4iLCAiXG5leHBvcnQgeyBfRGF0YWJhc2UgYXMgRGF0YWJhc2UgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvX0RhdGFiYXNlJztcblxuIiwgIlxuZXhwb3J0IGNsYXNzIE5vdEltcGxlbWVudGVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgbm90IGltcGxlbWVudGVkOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgV2l0aEVudGl0eVBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEVudGl0eS93aXRoRW50aXR5Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IE5vdEltcGxlbWVudGVkRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9Ob3RJbXBsZW1lbnRlZEVycm9yL05vdEltcGxlbWVudGVkRXJyb3InO1xuaW1wb3J0IHsgRW1iZWRkYWJsZSwgRW50aXR5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IElucHV0VHlwZSwgT2JqZWN0VHlwZSB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCB3aXRoRW50aXR5ID0gKHtcbiAgaXNBYnN0cmFjdCA9IGZhbHNlLFxuICBpc0VtYmVkZGVkID0gZmFsc2UsXG4gIGlzUmVwb3NpdG9yeSA9IGZhbHNlLFxuICBpc1NjaGVtYSA9IHRydWUsXG4gIGlzU2NoZW1hSW5wdXQgPSB0cnVlLFxuICBuYW1lLFxufTogV2l0aEVudGl0eVBhcmFtc01vZGVsKTogQ2xhc3NEZWNvcmF0b3IgPT4ge1xuICBpZiAoIW5hbWUgJiYgIWlzQWJzdHJhY3QpIHtcbiAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcignbmFtZSBmb3Igbm9uLWFic3RyYWN0IGVudGl0eScpO1xuICB9XG4gIHJldHVybiAoPFRUeXBlPihCYXNlOiBUVHlwZSkgPT4ge1xuICAgIGlzU2NoZW1hICYmIE9iamVjdFR5cGUobmFtZSB8fCAnJywgeyBpc0Fic3RyYWN0IH0pKEJhc2UgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3Rvck1vZGVsKTtcbiAgICBpc1NjaGVtYUlucHV0ICYmIElucHV0VHlwZShgJHtuYW1lfUlucHV0YCwgeyBpc0Fic3RyYWN0IH0pKEJhc2UgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3Rvck1vZGVsKTtcbiAgICByZXR1cm4gaXNSZXBvc2l0b3J5XG4gICAgICA/IChpc0VtYmVkZGVkID8gRW1iZWRkYWJsZSA6IEVudGl0eSkoeyBhYnN0cmFjdDogaXNBYnN0cmFjdCwgY29sbGVjdGlvbjogbmFtZSB9KShcbiAgICAgICAgICBCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCxcbiAgICAgICAgKVxuICAgICAgOiBCYXNlO1xuICB9KSBhcyBDbGFzc0RlY29yYXRvcjtcbn07XG5cbiIsICJcbmV4cG9ydCBlbnVtIEZJRUxEX1RZUEUge1xuICBCT09MRUFOID0gJ0Jvb2xlYW4nLFxuICBEQVRFID0gJ0RhdGUnLFxuICBJRCA9ICdJRCcsXG4gIE5VTUJFUiA9ICdOdW1iZXInLFxuICBQUklNQVJZX0tFWSA9ICdQcmltYXJ5S2V5JyxcbiAgU1RSSU5HID0gJ1N0cmluZycsXG59XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgV2l0aEZpZWxkUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRmllbGQvd2l0aEZpZWxkLm1vZGVscyc7XG5pbXBvcnQgeyBGSUVMRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybS9mb3JtLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBBcnJheVR5cGUsIEVtYmVkZGVkLCBJbmRleCwgUHJpbWFyeUtleSwgUHJvcGVydHkgfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuaW1wb3J0IHR5cGUgeyBSZXR1cm5UeXBlRnVuY1ZhbHVlIH0gZnJvbSAndHlwZS1ncmFwaHFsL2Rpc3QvZGVjb3JhdG9ycy90eXBlcyc7XG5cbmNvbnN0IF9nZXRGaWVsZCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHtcbiAgUmVzb3VyY2UsXG4gIGlzQXJyYXksXG4gIHR5cGUsXG59OiBXaXRoRmllbGRQYXJhbXNNb2RlbDxUVHlwZT4pOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIGlmIChSZXNvdXJjZSkge1xuICAgIHJldHVybiBGaWVsZCgoKSA9PiAoaXNBcnJheSA/IFtSZXNvdXJjZV0gOiBSZXNvdXJjZSkgYXMgUmV0dXJuVHlwZUZ1bmNWYWx1ZSwgeyBzaW1wbGU6IHRydWUgfSk7XG4gIH1cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBGSUVMRF9UWVBFLlNUUklORzpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBTdHJpbmcpO1xuICAgIGNhc2UgRklFTERfVFlQRS5CT09MRUFOOlxuICAgICAgcmV0dXJuIEZpZWxkKCgpID0+IEJvb2xlYW4pO1xuICAgIGNhc2UgRklFTERfVFlQRS5EQVRFOlxuICAgICAgcmV0dXJuIEZpZWxkKCgpID0+IERhdGUpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gRmllbGQoKTtcbiAgfVxufTtcblxuY29uc3QgX2dldENvbHVtbiA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHtcbiAgUmVzb3VyY2UsXG4gIGRlZmF1bHRWYWx1ZSxcbiAgaXNBcnJheSxcbiAgaXNPcHRpb25hbCxcbiAgdHlwZSxcbn06IFdpdGhGaWVsZFBhcmFtc01vZGVsPFRUeXBlPik6IFByb3BlcnR5RGVjb3JhdG9yID0+IHtcbiAgaWYgKFJlc291cmNlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGlzQXJyYXlcbiAgICAgICAgPyBFbWJlZGRlZCgoKSA9PiBSZXNvdXJjZSwgeyBhcnJheTogdHJ1ZSwgbnVsbGFibGU6IGlzT3B0aW9uYWwgfSlcbiAgICAgICAgOiBQcm9wZXJ0eSh7IG51bGxhYmxlOiBpc09wdGlvbmFsLCB0eXBlOiAoKSA9PiBSZXNvdXJjZSB9KVxuICAgICkgYXMgUHJvcGVydHlEZWNvcmF0b3I7XG4gIH1cbiAgY29uc3QgW19GaWVsZCwgX29wdGlvbnNdID0gKCgpID0+IHtcbiAgICBpZiAoaXNBcnJheSkge1xuICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyB0eXBlOiBBcnJheVR5cGUgfV07XG4gICAgfVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLlBSSU1BUllfS0VZOlxuICAgICAgICByZXR1cm4gW1ByaW1hcnlLZXksIHsgdHlwZTogJ09iamVjdElkJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5JRDpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyB0eXBlOiAnT2JqZWN0SWQnIH1dO1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLlNUUklORzpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyB0eXBlOiAnc3RyaW5nJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5EQVRFOlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IHR5cGU6IERhdGUgfV07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IHR5cGU6IHVuZGVmaW5lZCB9XTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgcmV0dXJuIF9GaWVsZCh7XG4gICAgLi4uX29wdGlvbnMsXG4gICAgbnVsbGFibGU6IGlzT3B0aW9uYWwsXG4gICAgb25DcmVhdGU6IGRlZmF1bHRWYWx1ZSB8fCB1bmRlZmluZWQsXG4gIH0pIGFzIFByb3BlcnR5RGVjb3JhdG9yO1xufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhGaWVsZCA9XG4gIDxUVHlwZT4oe1xuICAgIFJlc291cmNlLFxuICAgIGRlZmF1bHRWYWx1ZSxcbiAgICBleHBpcmUsXG4gICAgaXNBcnJheSxcbiAgICBpc09wdGlvbmFsLFxuICAgIGlzUmVwb3NpdG9yeSA9IGZhbHNlLFxuICAgIGlzU2NoZW1hID0gdHJ1ZSxcbiAgICBpc1VuaXF1ZSxcbiAgICB0eXBlLFxuICB9OiBXaXRoRmllbGRQYXJhbXNNb2RlbDxUVHlwZT4gPSB7fSk6IFByb3BlcnR5RGVjb3JhdG9yID0+XG4gICh0YXJnZXQsIHByb3BlcnR5S2V5KSA9PiB7XG4gICAgKGV4cGlyZSB8fCBpc1VuaXF1ZSkgJiZcbiAgICAgIChJbmRleCh7IG9wdGlvbnM6IGV4cGlyZSA/IHsgZXhwaXJlQWZ0ZXJTZWNvbmRzOiBleHBpcmUgfSA6IHt9IH0pIGFzIFByb3BlcnR5RGVjb3JhdG9yKShcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBwcm9wZXJ0eUtleSxcbiAgICAgICk7XG5cbiAgICBpc1NjaGVtYSAmJiBfZ2V0RmllbGQoeyBSZXNvdXJjZSwgaXNBcnJheSwgaXNPcHRpb25hbCwgdHlwZSB9KSh0YXJnZXQsIHByb3BlcnR5S2V5KTtcblxuICAgIGlzUmVwb3NpdG9yeSAmJlxuICAgICAgX2dldENvbHVtbih7IFJlc291cmNlLCBkZWZhdWx0VmFsdWUsIGlzQXJyYXksIGlzT3B0aW9uYWwsIHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gIH07XG5cbiIsICJcbmV4cG9ydCBlbnVtIEhPT0tfVFlQRSB7XG4gIEJFRk9SRV9DUkVBVEUgPSAnQkVGT1JFX0NSRUFURScsXG59XG5cbiIsICJcbmV4cG9ydCBjbGFzcyBJbnZhbGlkQXJndW1lbnRFcnJvciBleHRlbmRzIEVycm9yIHt9XG5cbiIsICJcbmltcG9ydCB7IEhPT0tfVFlQRSB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IFdpdGhIb29rUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSG9vay93aXRoSG9vay5tb2RlbHMnO1xuaW1wb3J0IHsgSW52YWxpZEFyZ3VtZW50RXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9JbnZhbGlkQXJndW1lbnRFcnJvci9JbnZhbGlkQXJndW1lbnRFcnJvcic7XG5pbXBvcnQgeyBCZWZvcmVDcmVhdGUgfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuXG5jb25zdCBfZ2V0SG9vayA9ICh7IHR5cGUgfTogV2l0aEhvb2tQYXJhbXNNb2RlbCk6IFByb3BlcnR5RGVjb3JhdG9yID0+IHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBIT09LX1RZUEUuQkVGT1JFX0NSRUFURTpcbiAgICAgIHJldHVybiBCZWZvcmVDcmVhdGUoKSBhcyBQcm9wZXJ0eURlY29yYXRvcjtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoSG9vayA9XG4gICh7IHR5cGUgfTogV2l0aEhvb2tQYXJhbXNNb2RlbCk6IFByb3BlcnR5RGVjb3JhdG9yID0+XG4gICh0YXJnZXQsIHByb3BlcnR5S2V5KSA9PlxuICAgIF9nZXRIb29rKHsgdHlwZSB9KSh0YXJnZXQsIHByb3BlcnR5S2V5KTtcblxuIiwgIlxuaW1wb3J0IHsgaXNOaWwgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9ICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4gPT5cbiAgdmFsdWUgPT09ICcnIHx8IGlzTmlsKHZhbHVlKSB8fCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09ICd7fSc7XG5cbiIsIG51bGwsIG51bGwsICJcbmV4cG9ydCBjb25zdCBDQVJEX1JFU09VUkNFX05BTUUgPSAnQ2FyZCc7XG5cbmV4cG9ydCBlbnVtIENBUkRfRlVORElORyB7XG4gIENSRURJVCA9ICdDUkVESVQnLFxuICBERUJJVCA9ICdERUJJVCcsXG59XG5cbiIsIG51bGwsICJcbmV4cG9ydCBjb25zdCBMSU5LRURfVVNFUl9SRVNPVVJDRV9OQU1FID0gJ0xpbmtlZFVzZXInO1xuXG5leHBvcnQgZW51bSBMSU5LRURfVVNFUl9UWVBFIHtcbiAgU1RSSVBFID0gJ3N0cmlwZScsXG59XG5cbiIsIG51bGwsICJcbmV4cG9ydCBjb25zdCBVU0VSX1JFU09VUkNFX05BTUUgPSAnVXNlcic7XG5cbiIsIG51bGwsICJcbmV4cG9ydCBjb25zdCBBQ0NFU1NfUkVTT1VSQ0VfTkFNRSA9ICdBY2Nlc3MnO1xuXG5leHBvcnQgZW51bSBBQ0NFU1NfUk9MRSB7XG4gIEFETUlOID0gJ0FkbWluJyxcbiAgQU5ZID0gJ0FueScsXG4gIFVTRVIgPSAnVXNlcicsXG59XG5cbmV4cG9ydCBlbnVtIEFDQ0VTU19MRVZFTCB7XG4gIFBST0hJQklURUQgPSAnUFJPSElCSVRFRCcsXG4gIFBST1RFQ1RFRCA9ICdQUk9URUNURUQnLFxuICBQVUJMSUMgPSAnUFVCTElDJyxcbiAgUkVTVFJJQ1RFRCA9ICdSRVNUUklDVEVEJyxcbn1cblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IE9UUF9FWFBJUkFUSU9OX1NFQ09ORFMgPSA2MCAqIDU7IC8vIDUgbWludXRlc1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IENhbGxhYmxlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcblxudHlwZSBfV2l0aENvbmRpdGlvblJlc3VsdE1vZGVsID1cbiAgfCBDYWxsYWJsZU1vZGVsXG4gIHwgQ2xhc3NEZWNvcmF0b3JcbiAgfCBNZXRob2REZWNvcmF0b3JcbiAgfCBQYXJhbWV0ZXJEZWNvcmF0b3JcbiAgfCBQcm9wZXJ0eURlY29yYXRvcjtcblxuZXhwb3J0IGNvbnN0IHdpdGhDb25kaXRpb24gPVxuICAoY29uZGl0aW9uOiBib29sZWFuLCBpZlRydWU/OiBfV2l0aENvbmRpdGlvblJlc3VsdE1vZGVsLCBpZkZhbHNlPzogX1dpdGhDb25kaXRpb25SZXN1bHRNb2RlbCkgPT5cbiAgKC4uLnBhcmFtczogQXJyYXk8dW5rbm93bj4pOiB2b2lkID0+XG4gICAgaWZUcnVlICYmIGNvbmRpdGlvblxuICAgICAgPyAoaWZUcnVlIGFzIENhbGxhYmxlTW9kZWw8dm9pZCwgQXJyYXk8dW5rbm93bj4+KSguLi5wYXJhbXMpXG4gICAgICA6IGlmRmFsc2UgJiYgIWNvbmRpdGlvblxuICAgICAgPyAoaWZGYWxzZSBhcyBDYWxsYWJsZU1vZGVsPHZvaWQsIEFycmF5PHVua25vd24+PikoLi4ucGFyYW1zKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgV2l0aEFjY2Vzc1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEFjY2Vzcy93aXRoQWNjZXNzLm1vZGVscyc7XG5pbXBvcnQgeyBBQ0NFU1NfTEVWRUwsIEFDQ0VTU19ST0xFIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUge1xuICBBY2Nlc3NMZXZlbE1vZGVsLFxuICBBY2Nlc3NSb2xlTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MubW9kZWxzJztcbmltcG9ydCB7IHdpdGhDb25kaXRpb24gfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbmRpdGlvbi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IEF1dGhvcml6ZWQgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgZ2V0QWNjZXNzUm9sZSA9IChsZXZlbDogQWNjZXNzTGV2ZWxNb2RlbCk6IEFycmF5PEFjY2Vzc1JvbGVNb2RlbD4gPT4ge1xuICBzd2l0Y2ggKGxldmVsKSB7XG4gICAgY2FzZSBBQ0NFU1NfTEVWRUwuUFJPSElCSVRFRDpcbiAgICAgIHJldHVybiBbXTtcbiAgICBjYXNlIEFDQ0VTU19MRVZFTC5SRVNUUklDVEVEOlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5BRE1JTl07XG4gICAgY2FzZSBBQ0NFU1NfTEVWRUwuUFJPVEVDVEVEOlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5VU0VSXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5BTlldO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEFjY2VzcyA9ICh7XG4gIGxldmVsID0gQUNDRVNTX0xFVkVMLlJFU1RSSUNURUQsXG59OiBXaXRoQWNjZXNzUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciAmIE1ldGhvZERlY29yYXRvciA9PlxuICB3aXRoQ29uZGl0aW9uKGxldmVsICE9PSBBQ0NFU1NfTEVWRUwuUFVCTElDLCBBdXRob3JpemVkKGdldEFjY2Vzc1JvbGUobGV2ZWwpKSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBPVFBfUkVTT1VSQ0VfTkFNRSA9ICdPdHAnO1xuXG5leHBvcnQgY29uc3QgT1RQX0xFTkdUSCA9IDY7XG5cbmV4cG9ydCBjb25zdCBPVFBfSUZfRE9FU19OT1RfRVhJU1QgPSBgJHtPVFBfUkVTT1VSQ0VfTkFNRX1JZkRvZXNOb3RFeGlzdGA7XG5cbmV4cG9ydCBjb25zdCBPVFBfU1RBVElDID0gJzAnLnJlcGVhdChPVFBfTEVOR1RIKTtcblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IERVTU1ZX0VNQkVEREVEX1JFU09VUkNFX1JFU09VUkNFX05BTUUgPSAnRHVtbXlFbWJlZGRlZFJlc291cmNlJztcblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IERVTU1ZX0VOVElUWV9SRVNPVVJDRV9SRVNPVVJDRV9OQU1FID0gJ0R1bW15RW50aXR5UmVzb3VyY2UnO1xuXG4iLCBudWxsLCAiXG5leHBvcnQgZW51bSBEQVRBQkFTRV9UWVBFIHtcbiAgTU9OR08gPSAnbW9uZ28nLFxufVxuXG4iLCAiXG5pbXBvcnQgeyBBY2Nlc3MgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcyc7XG5pbXBvcnQgeyBPdHAgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvT3RwL090cCc7XG5pbXBvcnQgeyBEdW1teUVudGl0eVJlc291cmNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW50aXR5UmVzb3VyY2UvRHVtbXlFbnRpdHlSZXNvdXJjZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlcic7XG5pbXBvcnQgeyBEQVRBQkFTRV9UWVBFIH0gZnJvbSAnQGxpYi9jb25maWcvZGF0YWJhc2UvZGF0YWJhc2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgRGF0YWJhc2VDb25maWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgZGF0YWJhc2VDb25maWc6IERhdGFiYXNlQ29uZmlnUGFyYW1zTW9kZWwgPSB7XG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfTkFNRSxcbiAgZW50aXRpZXM6IFtcbiAgICBBY2Nlc3MsXG4gICAgT3RwLFxuICAgIFVzZXIsXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBEdW1teUVudGl0eVJlc291cmNlLFxuICBdLmZpbHRlcihCb29sZWFuKSBhcyBBcnJheTxDb25zdHJ1Y3Rvck1vZGVsPEVudGl0eVJlc291cmNlTW9kZWw+PixcbiAgaG9zdDogcHJvY2Vzcy5lbnYuU0VSVkVSX01PTkdPX0RBVEFCQVNFX1VSTCxcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlNFUlZFUl9NT05HT19EQVRBQkFTRV9QQVNTV09SRCxcbiAgcG9vbDogeyBtYXg6IDEwIH0sXG4gIHR5cGU6IERBVEFCQVNFX1RZUEUuTU9OR08sXG4gIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfVVNFUk5BTUUsXG59O1xuXG4iLCAiXG5pbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuZXhwb3J0IGNvbnN0IF93aXRoQ29udGFpbmVyOiAoKSA9PiBDbGFzc0RlY29yYXRvciA9IGluamVjdGFibGUgYXMgKCkgPT4gQ2xhc3NEZWNvcmF0b3I7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgX3dpdGhDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci9fd2l0aENvbnRhaW5lcic7XG5pbXBvcnQgdHlwZSB7IFdpdGhDb250YWluZXJQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIuLm1vZGVscyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuXG5leHBvcnQgY29uc3Qgd2l0aENvbnRhaW5lciA9XG4gICh7IG5hbWUgfTogV2l0aENvbnRhaW5lclBhcmFtc01vZGVsID0ge30pID0+XG4gIDxUVHlwZSBleHRlbmRzIENvbnN0cnVjdG9yTW9kZWw+KHRhcmdldDogVFR5cGUpID0+IHtcbiAgICBfd2l0aENvbnRhaW5lcigpKHRhcmdldCk7XG4gICAgbmFtZSAmJiBDb250YWluZXIuc2V0PFRUeXBlPihuYW1lLCB0YXJnZXQpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiIsIG51bGwsICJcbmltcG9ydCB7IGNyZWF0ZUhhbmRsZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvbGFtYmRhL3V0aWxzL2NyZWF0ZUhhbmRsZXIvY3JlYXRlSGFuZGxlcic7XG5pbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2xhbWJkYS91dGlscy9nZXRDb250ZXh0L2dldENvbnRleHQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXR1cC91dGlscy9pbml0aWFsaXplL2luaXRpYWxpemUnO1xuaW1wb3J0IHsgZ3JhcGhxbENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2h0dHAvZ3JhcGhxbC9ncmFwaHFsLmNvbmZpZyc7XG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1sYW1iZGEnO1xuaW1wb3J0IHR5cGUgeyBDb250ZXh0IH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgdHlwZSB7IEdyYXBoUUxGb3JtYXR0ZWRFcnJvciB9IGZyb20gJ2dyYXBocWwnO1xuXG5sZXQgaXNJbml0aWFsaXplZDogYm9vbGVhbjtcblxuY29uc3QgZ3JhcGhRbEhhbmRsZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgY29udGV4dDogYXN5bmMgKHsgY29udGV4dCwgZXZlbnQgfSk6IFByb21pc2U8Q29udGV4dD4gPT4gZ2V0Q29udGV4dCh7IGNvbnRleHQsIGV2ZW50IH0pLFxuICBmb3JtYXRFcnJvcjogKGUpOiBHcmFwaFFMRm9ybWF0dGVkRXJyb3IgPT4ge1xuICAgIGVycm9yKGBHcmFwaFFMIEVycm9yOlxcbiR7SlNPTi5zdHJpbmdpZnkoZSwgbnVsbCwgMil9YCk7XG5cbiAgICBjb25zdCBuYW1lID0gKGUub3JpZ2luYWxFcnJvciBhcyBFcnJvcik/LmNvbnN0cnVjdG9yPy5uYW1lO1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSAoKCkgPT4ge1xuICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgIGNhc2UgJ0ZvcmJpZGRlbkVycm9yJzpcbiAgICAgICAgICByZXR1cm4gSFRUUF9TVEFUVVNfQ09ERS5GT1JCSURERU47XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGUuZXh0ZW5zaW9ucy5zdGF0dXNDb2RlO1xuICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICByZXR1cm4geyAuLi5lLCBleHRlbnNpb25zOiB7IC4uLmUuZXh0ZW5zaW9ucywgbmFtZSwgc3RhdHVzQ29kZSB9IH07XG4gIH0sXG4gIHNjaGVtYTogZ3JhcGhxbENvbmZpZyxcbn0pLmNyZWF0ZUhhbmRsZXIoKTtcblxuZXhwb3J0IGNvbnN0IG1haW4gPSBjcmVhdGVIYW5kbGVyKGFzeW5jIChldmVudCwgY29udGV4dCwgY2FsbGJhY2spID0+IHtcbiAgaWYgKCFpc0luaXRpYWxpemVkKSB7XG4gICAgYXdhaXQgaW5pdGlhbGl6ZSgpO1xuICAgIGlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiBncmFwaFFsSGFuZGxlcihldmVudCwgY29udGV4dCwgY2FsbGJhY2spO1xufSk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX0NyZWF0ZUhhbmRsZXJNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9sYW1iZGEvdXRpbHMvY3JlYXRlSGFuZGxlci9fY3JlYXRlSGFuZGxlci5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX2NyZWF0ZUhhbmRsZXI6IF9DcmVhdGVIYW5kbGVyTW9kZWwgPVxuICAoaGFuZGxlcikgPT4gYXN5bmMgKGV2ZW50LCBjb250ZXh0LCBjYWxsYmFjaykgPT4ge1xuICAgIGNvbnRleHQuY2FsbGJhY2tXYWl0c0ZvckVtcHR5RXZlbnRMb29wID0gZmFsc2U7XG4gICAgcmV0dXJuIGhhbmRsZXIoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBVc2VyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXIubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IFNJR05fSU5fVE9LRU5fQ0xBSU1fRklFTERTOiBBcnJheTxrZXlvZiBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbDxVc2VyTW9kZWw+PiA9IFtcbiAgJ2VtYWlsJyxcbiAgJ3Bob25lJyxcbiAgJ2ZpcnN0JyxcbiAgJ2xhc3QnLFxuXTtcblxuIiwgIlxuaW1wb3J0IHsgU0lHTl9JTl9UT0tFTl9DTEFJTV9GSUVMRFMgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBfSnd0U2VydmljZU1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvSnd0U2VydmljZS9fSnd0U2VydmljZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBTaWduSW5Ub2tlbk1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBVc2VyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXIubW9kZWxzJztcbmltcG9ydCBhZG1pbiBmcm9tICdmaXJlYmFzZS1hZG1pbic7XG5pbXBvcnQgeyBwaWNrLCB0b1N0cmluZyB9IGZyb20gJ2xvZGFzaCc7XG5cbmFkbWluLmFwcHMubGVuZ3RoIHx8XG4gIGFkbWluLmluaXRpYWxpemVBcHAoe1xuICAgIGNyZWRlbnRpYWw6IGFkbWluLmNyZWRlbnRpYWwuY2VydCh7XG4gICAgICBjbGllbnRFbWFpbDogcHJvY2Vzcy5lbnYuU0VSVkVSX0ZJUkVCQVNFX0FETUlOX0VNQUlMLFxuICAgICAgcHJpdmF0ZUtleTogcHJvY2Vzcy5lbnYuU0VSVkVSX0ZJUkVCQVNFX0FETUlOX1NFQ1JFVC5yZXBsYWNlKC9cXFxcbi9nbSwgJ1xcbicpLFxuICAgICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5TRVJWRVJfRklSRUJBU0VfQURNSU5fUFJPSkVDVF9JRCxcbiAgICB9KSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBfSnd0U2VydmljZTogX0p3dFNlcnZpY2VNb2RlbCA9IHtcbiAgY3JlYXRlVG9rZW46IGFzeW5jIChfaWQ6IHN0cmluZywgY2xhaW1zOiBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbDxVc2VyTW9kZWw+KTogUHJvbWlzZTxzdHJpbmc+ID0+XG4gICAgYWRtaW4uYXV0aCgpLmNyZWF0ZUN1c3RvbVRva2VuKHRvU3RyaW5nKF9pZCksIGNsYWltcyksXG5cbiAgdmVyaWZ5VG9rZW46IGFzeW5jICh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxTaWduSW5Ub2tlbk1vZGVsPiA9PiB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGF3YWl0IGFkbWluLmF1dGgoKS52ZXJpZnlJZFRva2VuKHRva2VuKTtcbiAgICByZXR1cm4ge1xuICAgICAgX2lkOiBkZWNvZGVkLnVpZCxcbiAgICAgIGNsYWltczoge1xuICAgICAgICAuLi4oZGVjb2RlZC5hZGRpdGlvbmFsQ2xhaW1zIHx8IHt9KSxcbiAgICAgICAgLi4ucGljayhkZWNvZGVkLCBTSUdOX0lOX1RPS0VOX0NMQUlNX0ZJRUxEUyksXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG4iLCAiXG5pbXBvcnQgeyBKd3RTZXJ2aWNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvSnd0U2VydmljZS9Kd3RTZXJ2aWNlJztcbmltcG9ydCB0eXBlIHsgX0dldENvbnRleHRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9sYW1iZGEvdXRpbHMvZ2V0Q29udGV4dC9fZ2V0Q29udGV4dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb250ZXh0IH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgeyBzZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY29uc3QgX2dldENvbnRleHQgPSBhc3luYyAoeyBjb250ZXh0LCBldmVudCB9OiBfR2V0Q29udGV4dFBhcmFtc01vZGVsKTogUHJvbWlzZTxDb250ZXh0PiA9PiB7XG4gIGNvbnN0IHsgYXV0aG9yaXphdGlvbiB9ID0gZXZlbnQuaGVhZGVycztcbiAgaWYgKGF1dGhvcml6YXRpb24pIHtcbiAgICBjb25zdCBbXywgdG9rZW5dID0gYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpO1xuICAgIGlmICh0b2tlbiAmJiB0b2tlbiAhPT0gJ251bGwnKSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgSnd0U2VydmljZS52ZXJpZnlUb2tlbih0b2tlbik7XG4gICAgICBzZXQoY29udGV4dCwgJ3VzZXInLCB1c2VyKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG4iLCAiXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSBhcyBpbml0aWFsaXplQmFzZSB9IGZyb20gJ0BsaWIvc2hhcmVkL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZSc7XG5cbmxldCBpc0luaXRpYWxpemVkID0gZmFsc2U7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoIWlzSW5pdGlhbGl6ZWQpIHtcbiAgICBjb25zdCB7IERhdGFiYXNlTWFpbiB9ID0gYXdhaXQgaW1wb3J0KCdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2VNYWluL0RhdGFiYXNlTWFpbicpO1xuXG4gICAgYXdhaXQgaW5pdGlhbGl6ZUJhc2UoKTtcblxuICAgIGF3YWl0IENvbnRhaW5lci5nZXQoRGF0YWJhc2VNYWluKS5pbml0aWFsaXplKCk7XG5cbiAgICBpc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxufTtcblxuIiwgIlxuaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcblxubGV0IGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoIWlzSW5pdGlhbGl6ZWQpIHtcbiAgICBpc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxufTtcblxuIiwgIlxuICAgICAgICBjb25zdCBfX2ZpbGVsb2MgPSB7XG4gICAgICAgICAgZmlsZW5hbWU6IFwiL1VzZXJzL3lnbWluL1Byb2plY3RzL21vbm9fdjIvYXBwMy9hcHAvcGFja2FnZXMvbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QudHNcIixcbiAgICAgICAgICBkaXJuYW1lOiBcIi9Vc2Vycy95Z21pbi9Qcm9qZWN0cy9tb25vX3YyL2FwcDMvYXBwL3BhY2thZ2VzL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290XCIsXG4gICAgICAgICAgcmVsYXRpdmVmaWxlbmFtZTogXCIuLi9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdC50c1wiLFxuICAgICAgICAgIHJlbGF0aXZlZGlybmFtZTogXCIuLi9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tUm9vdFwiXG4gICAgICAgIH07XG4gICAgICAgIGxldCBfX2xpbmUgPSAwO1xuICAgICAgXG5pbXBvcnQgeyBqb2luLCByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5cbmNvbnN0IFJPT1RfRElSID0gcmVzb2x2ZShfX2ZpbGVsb2MuZGlybmFtZSwgJy4uLy4uLy4uLy4uLy4uLy4uJyk7XG5cbmV4cG9ydCBjb25zdCBmcm9tUm9vdCA9ICguLi5wYXRoczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyA9PiBqb2luKFJPT1RfRElSLCAuLi5wYXRocyk7XG5cbiIsICJcbmltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuXG5leHBvcnQgY29uc3QgZnJvbVBhY2thZ2VzID0gKC4uLnBhdGhzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nID0+IGZyb21Sb290KCdwYWNrYWdlcycsIC4uLnBhdGhzKTtcblxuIiwgIlxuaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgdHlwZSB7IF9HcmFwaHFsQ29uZmlnUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9odHRwL2dyYXBocWwvX2dyYXBocWwubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgR3JhcGhRTFNjaGVtYSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgYnVpbGRTY2hlbWFTeW5jIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IF9ncmFwaHFsQ29uZmlnID0gKHtcbiAgYXV0aG9yaXplLFxuICBjb250YWluZXIsXG4gIHJlc29sdmVyRXh0ZW5zaW9uLFxuICBzY2hlbWFQYXRoLFxufTogX0dyYXBocWxDb25maWdQYXJhbXNNb2RlbCk6IEdyYXBoUUxTY2hlbWEgPT5cbiAgYnVpbGRTY2hlbWFTeW5jKHtcbiAgICBhdXRoQ2hlY2tlcjogKHsgY29udGV4dCB9LCByb2xlcykgPT4gYXV0aG9yaXplKHsgY29udGV4dCwgcm9sZXMgfSksXG4gICAgY29udGFpbmVyLFxuICAgIGVtaXRTY2hlbWFGaWxlOiBzY2hlbWFQYXRoLFxuICAgIG51bGxhYmxlQnlEZWZhdWx0OiB0cnVlLFxuICAgIHJlc29sdmVyczogW2Zyb21QYWNrYWdlcyhgKi9zcmMvKiovKi4ke3Jlc29sdmVyRXh0ZW5zaW9ufWApXSxcbiAgICB2YWxpZGF0ZToge1xuICAgICAgZm9yYmlkVW5rbm93blZhbHVlczogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiIsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgUmVwb3NpdG9yeU1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgeyBEYXRhYmFzZU1haW4gfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2VNYWluL0RhdGFiYXNlTWFpbic7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IGNsZWFuT2JqZWN0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHR5cGUgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7XG4gIEVudGl0eVJlc291cmNlU2VydmljZU1vZGVsLFxuICBFbnRpdHlSZXNvdXJjZVNlcnZpY2VQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlU2VydmljZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgSW5wdXRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL0lucHV0L0lucHV0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IE91dHB1dE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L091dHB1dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL1Jlc291cmNlL1Jlc291cmNlU2VydmljZS9SZXNvdXJjZVNlcnZpY2UubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IEVudGl0eVJlc291cmNlU2VydmljZSA9IDxUVHlwZSwgVEZvcm0+KHtcbiAgYWZ0ZXJDcmVhdGUsXG4gIGFmdGVyR2V0LFxuICBhZnRlckdldENvbm5lY3Rpb24sXG4gIGFmdGVyR2V0TWFueSxcbiAgYWZ0ZXJSZW1vdmUsXG4gIGFmdGVyVXBkYXRlLFxuICBiZWZvcmVDcmVhdGUsXG4gIGJlZm9yZUdldCxcbiAgYmVmb3JlR2V0Q29ubmVjdGlvbixcbiAgYmVmb3JlR2V0TWFueSxcbiAgYmVmb3JlUmVtb3ZlLFxuICBiZWZvcmVVcGRhdGUsXG4gIG5hbWUsXG59OiBFbnRpdHlSZXNvdXJjZVNlcnZpY2VQYXJhbXNNb2RlbDxUVHlwZSwgVEZvcm0+KTogQ29uc3RydWN0b3JNb2RlbDxcbiAgRW50aXR5UmVzb3VyY2VTZXJ2aWNlTW9kZWw8VFR5cGUsIFRGb3JtPlxuPiA9PiB7XG4gIGNsYXNzIF9FbnRpdHlSZXNvdXJjZVNlcnZpY2UgaW1wbGVtZW50cyBFbnRpdHlSZXNvdXJjZVNlcnZpY2VNb2RlbDxUVHlwZSwgVEZvcm0+IHtcbiAgICBwcm90ZWN0ZWQgX3JlcG9zaXRvcnk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPSBDb250YWluZXIuZ2V0KFxuICAgICAgRGF0YWJhc2VNYWluLFxuICAgICkuZ2V0UmVwb3NpdG9yeTxUVHlwZT4oeyBuYW1lIH0pO1xuXG4gICAgcHJvdGVjdGVkIF9kZWNvcmF0b3JzOiBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbDxUVHlwZSwgVEZvcm0+ID0ge1xuICAgICAgYWZ0ZXJDcmVhdGUsXG4gICAgICBhZnRlckdldCxcbiAgICAgIGFmdGVyR2V0Q29ubmVjdGlvbixcbiAgICAgIGFmdGVyR2V0TWFueSxcbiAgICAgIGFmdGVyUmVtb3ZlLFxuICAgICAgYWZ0ZXJVcGRhdGUsXG4gICAgICBiZWZvcmVDcmVhdGUsXG4gICAgICBiZWZvcmVHZXQsXG4gICAgICBiZWZvcmVHZXRDb25uZWN0aW9uLFxuICAgICAgYmVmb3JlR2V0TWFueSxcbiAgICAgIGJlZm9yZVJlbW92ZSxcbiAgICAgIGJlZm9yZVVwZGF0ZSxcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZXBvc2l0b3J5KCk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcG9zaXRvcnk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZWNvcmF0b3JzKCk6IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsPFRUeXBlLCBURm9ybT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlY29yYXRvcnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBkZWNvcmF0b3JzKHZhbHVlOiBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbDxUVHlwZSwgVEZvcm0+KSB7XG4gICAgICB0aGlzLl9kZWNvcmF0b3JzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlQ3JlYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUNyZWF0ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5jcmVhdGUoXG4gICAgICAgIF9pbnB1dCBhcyB1bmtub3duIGFzIElucHV0TW9kZWw8XG4gICAgICAgICAgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLFxuICAgICAgICAgIFRUeXBlLFxuICAgICAgICAgIEVudGl0eVJlc291cmNlRGF0YU1vZGVsPFRUeXBlPlxuICAgICAgICA+LFxuICAgICAgKTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJDcmVhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJDcmVhdGUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0KFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VULCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VULCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldCh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXQoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXQgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXQoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWFueShcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlksIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXRNYW55ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldE1hbnkoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkuZ2V0TWFueShfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldE1hbnkgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXRNYW55KHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIGdldENvbm5lY3Rpb24oXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfQ09OTkVDVElPTiwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0Q29ubmVjdGlvblxuICAgICAgICAgID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldENvbm5lY3Rpb24oeyBpbnB1dCB9KVxuICAgICAgICAgIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXRDb25uZWN0aW9uKF9pbnB1dCk7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0Q29ubmVjdGlvblxuICAgICAgICA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldENvbm5lY3Rpb24oeyBvdXRwdXQgfSlcbiAgICAgICAgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlVXBkYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVVwZGF0ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS51cGRhdGUoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJVcGRhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJVcGRhdGUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVtb3ZlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlUmVtb3ZlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVJlbW92ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5yZW1vdmUoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJSZW1vdmUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJSZW1vdmUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgY291bnQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXBvc2l0b3J5LmNvdW50KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9FbnRpdHlSZXNvdXJjZVNlcnZpY2U7XG59O1xuXG4iLCAiXG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0LCBrZXlzLCB0b1BsYWluT2JqZWN0IH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNvbnN0IGNsZWFuT2JqZWN0ID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4odmFsdWU6IFRUeXBlKTogVFR5cGUgPT4ge1xuICBjb25zdCBfdmFsdWUgPSBpc1BsYWluT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogdG9QbGFpbk9iamVjdCh2YWx1ZSk7XG4gIGtleXMoX3ZhbHVlKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgY29uc3QgdiA9IChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdO1xuICAgIGlzUGxhaW5PYmplY3QodikgJiYgY2xlYW5PYmplY3Qodik7XG4gICAgdiA9PT0gdW5kZWZpbmVkICYmIGRlbGV0ZSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgfSk7XG4gIHJldHVybiBfdmFsdWU7XG59O1xuXG4iLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7IF9XaXRoRmllbGRSZXNvbHZlclBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2h0dHAvZGVjb3JhdG9ycy93aXRoRmllbGRSZXNvbHZlci9fd2l0aEZpZWxkUmVzb2x2ZXIubW9kZWxzJztcbmltcG9ydCB7IEZpZWxkUmVzb2x2ZXIgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgX3dpdGhGaWVsZFJlc29sdmVyID1cbiAgPFRUeXBlPih7IFJlc291cmNlIH06IF9XaXRoRmllbGRSZXNvbHZlclBhcmFtc01vZGVsPFRUeXBlPik6IE1ldGhvZERlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikgPT5cbiAgICAoUmVzb3VyY2UgPyBGaWVsZFJlc29sdmVyKCgpID0+IFJlc291cmNlLCB7fSkgOiBGaWVsZFJlc29sdmVyKCkpKFxuICAgICAgdGFyZ2V0LFxuICAgICAgcHJvcGVydHlLZXksXG4gICAgICBkZXNjcmlwdG9yLFxuICAgICk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX1dpdGhSZXNvbHZlclBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2h0dHAvZGVjb3JhdG9ycy93aXRoUmVzb2x2ZXIvX3dpdGhSZXNvbHZlci5tb2RlbHMnO1xuaW1wb3J0IHsgUmVzb2x2ZXIgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gX3dpdGhSZXNvbHZlcjxUVHlwZT4oe1xuICBSZXNvdXJjZSxcbiAgaXNBYnN0cmFjdCxcbn06IF9XaXRoUmVzb2x2ZXJQYXJhbXNNb2RlbDxUVHlwZT4gPSB7fSk6IENsYXNzRGVjb3JhdG9yIHtcbiAgcmV0dXJuICh0YXJnZXQpID0+IHtcbiAgICBpZiAoaXNBYnN0cmFjdCkge1xuICAgICAgcmV0dXJuIFJlc29sdmVyKHsgaXNBYnN0cmFjdDogdHJ1ZSB9KSh0YXJnZXQpO1xuICAgIH1cbiAgICBpZiAoUmVzb3VyY2UpIHtcbiAgICAgIHJldHVybiBSZXNvbHZlcigoKSA9PiBSZXNvdXJjZSkodGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIFJlc29sdmVyKCkodGFyZ2V0KTtcbiAgfTtcbn1cblxuIiwgIlxuaW1wb3J0IHsgUm9vdCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aFNlbGYgPSAoKTogUGFyYW1ldGVyRGVjb3JhdG9yID0+ICh0YXJnZXQsIHByb3BlcnR5S2V5LCBwYXJhbWV0ZXJJbmRleCkgPT5cbiAgUm9vdCgpKHRhcmdldCwgcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KTtcblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuZXhwb3J0IGNsYXNzIEludmFsaWRUeXBlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGFjdHVhbDogdW5rbm93biwgZXhwZWN0ZWQ6IHVua25vd24pIHtcbiAgICBzdXBlcihgaW5wdXQgdHlwZTogJHt0eXBlb2YgYWN0dWFsfSAoYWN0dWFsKSB2cyAke2V4cGVjdGVkfSAoZXhwZWN0ZWQpYCk7XG4gIH1cbn1cblxuIiwgIlxuZXhwb3J0IGNvbnN0IFJFU09VUkNFID0gJ3Jlc291cmNlJztcblxuZXhwb3J0IGVudW0gUkVTT1VSQ0VfTUVUSE9EX1RZUEUge1xuICBDUkVBVEUgPSAnQ3JlYXRlJyxcbiAgR0VUID0gJ0dldCcsXG4gIEdFVF9DT05ORUNUSU9OID0gJ0dldENvbm5lY3Rpb24nLFxuICBHRVRfTUFOWSA9ICdHZXRNYW55JyxcbiAgUkVNT1ZFID0gJ1JlbW92ZScsXG4gIFVQREFURSA9ICdVcGRhdGUnLFxufVxuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IFdpdGhJbnB1dFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aElucHV0L3dpdGhJbnB1dC5tb2RlbHMnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvSW5wdXQvSW5wdXQnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyBBcmcgYXMgQXJnRGVjb3JhdG9yIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IHdpdGhJbnB1dCA9IDxcbiAgVE1ldGhvZCBleHRlbmRzIFJlc291cmNlTWV0aG9kVHlwZU1vZGVsLFxuICBUVHlwZSxcbiAgVEZvcm0sXG4gIFRSb290ID0gdW5kZWZpbmVkLFxuPih7XG4gIFJlc291cmNlLFxuICBSb290UmVzb3VyY2UsXG4gIG1ldGhvZCxcbiAgbmFtZSxcbn06IFdpdGhJbnB1dFBhcmFtc01vZGVsPFRNZXRob2QsIFRUeXBlLCBURm9ybSwgVFJvb3Q+KTogUGFyYW1ldGVyRGVjb3JhdG9yID0+IHtcbiAgY29uc3QgX25hbWUgPSBgJHtuYW1lfSR7bWV0aG9kfWA7XG4gIGNvbnN0IF9JbnB1dCA9IElucHV0KHsgUmVzb3VyY2UsIFJvb3RSZXNvdXJjZSwgbWV0aG9kLCBuYW1lOiBfbmFtZSB9KTtcbiAgcmV0dXJuIEFyZ0RlY29yYXRvcignaW5wdXQnLCAoKSA9PiBfSW5wdXQpO1xufTtcblxuIiwgIlxuaW1wb3J0IHsgd2l0aEFjY2VzcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhBY2Nlc3Mvd2l0aEFjY2Vzcyc7XG5pbXBvcnQgdHlwZSB7IFdpdGhPdXRwdXRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhPdXRwdXQvd2l0aE91dHB1dC5tb2RlbHMnO1xuaW1wb3J0IHsgT3V0cHV0IH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3V0aWxzL091dHB1dC9PdXRwdXQnO1xuaW1wb3J0IHsgQUNDRVNTX0xFVkVMIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMnO1xuaW1wb3J0IHsgSW52YWxpZFR5cGVFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0ludmFsaWRUeXBlRXJyb3IvSW52YWxpZFR5cGVFcnJvcic7XG5pbXBvcnQgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7IE11dGF0aW9uLCBRdWVyeSB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmNvbnN0IF9nZXRPcGVyYXRpb24gPSAobWV0aG9kOiBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCk6IHR5cGVvZiBNdXRhdGlvbiB8IHR5cGVvZiBRdWVyeSA9PiB7XG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVQ6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfTUFOWTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OOlxuICAgICAgcmV0dXJuIFF1ZXJ5O1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFOlxuICAgICAgcmV0dXJuIE11dGF0aW9uO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFR5cGVFcnJvcihtZXRob2QsIFJFU09VUkNFX01FVEhPRF9UWVBFKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhPdXRwdXQgPVxuICA8VE1ldGhvZCBleHRlbmRzIFJlc291cmNlTWV0aG9kVHlwZU1vZGVsLCBUVHlwZSwgVFJvb3QgPSB1bmRlZmluZWQ+KHtcbiAgICBuYW1lLFxuICAgIG1ldGhvZCxcbiAgICBSZXNvdXJjZSxcbiAgICBSb290UmVzb3VyY2UsXG4gICAgbGV2ZWwgPSBBQ0NFU1NfTEVWRUwuUkVTVFJJQ1RFRCxcbiAgfTogV2l0aE91dHB1dFBhcmFtc01vZGVsPFRNZXRob2QsIFRUeXBlLCBUUm9vdD4pOiBNZXRob2REZWNvcmF0b3IgPT5cbiAgKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpID0+IHtcbiAgICBjb25zdCBfbmFtZSA9IGAke25hbWV9JHttZXRob2R9YDtcbiAgICBjb25zdCBfT3V0cHV0ID0gT3V0cHV0KHsgUmVzb3VyY2UsIFJvb3RSZXNvdXJjZSwgbWV0aG9kLCBuYW1lOiBfbmFtZSB9KTtcblxuICAgIHdpdGhBY2Nlc3MoeyBsZXZlbCB9KSh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKTtcbiAgICBfZ2V0T3BlcmF0aW9uKG1ldGhvZCkoKCkgPT4gX091dHB1dCB8fCBCb29sZWFuLCB7IG5hbWU6IF9uYW1lIH0pKFxuICAgICAgdGFyZ2V0LFxuICAgICAgcHJvcGVydHlLZXksXG4gICAgICBkZXNjcmlwdG9yLFxuICAgICk7XG4gIH07XG5cbiIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3V0aWxzL0Nvbm5lY3Rpb24vQ29ubmVjdGlvbic7XG5pbXBvcnQgdHlwZSB7IFJlc3VsdFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3V0aWxzL1Jlc3VsdC9SZXN1bHQubW9kZWxzJztcbmltcG9ydCB7IEludmFsaWRUeXBlRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9JbnZhbGlkVHlwZUVycm9yL0ludmFsaWRUeXBlRXJyb3InO1xuaW1wb3J0IHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJlc3VsdE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvUmVzdWx0L1Jlc3VsdC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgUmVzdWx0ID0gPFRNZXRob2QgZXh0ZW5kcyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCwgVFR5cGU+KHtcbiAgUmVzb3VyY2UsXG4gIG1ldGhvZCxcbiAgbmFtZSxcbn06IFJlc3VsdFBhcmFtc01vZGVsPFRNZXRob2QsIFRUeXBlPik6IFJlc291cmNlQ29uc3RydWN0b3JNb2RlbDxSZXN1bHRNb2RlbDxUTWV0aG9kLCBUVHlwZT4+ID0+IHtcbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVDpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkNSRUFURTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRTpcbiAgICAgIHJldHVybiBSZXNvdXJjZSBhcyBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWw8UmVzdWx0TW9kZWw8VE1ldGhvZCwgVFR5cGU+PjtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZOlxuICAgICAgcmV0dXJuIFtSZXNvdXJjZV0gYXMgUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsPFJlc3VsdE1vZGVsPFRNZXRob2QsIFRUeXBlPj47XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfQ09OTkVDVElPTjoge1xuICAgICAgcmV0dXJuIENvbm5lY3Rpb24oeyBSZXNvdXJjZSwgbmFtZSB9KSBhcyBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWw8XG4gICAgICAgIFJlc3VsdE1vZGVsPFRNZXRob2QsIFRUeXBlPlxuICAgICAgPjtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkVHlwZUVycm9yKG1ldGhvZCwgUkVTT1VSQ0VfTUVUSE9EX1RZUEUpO1xuICB9XG59O1xuXG4iLCBudWxsLCBudWxsLCBudWxsLCAiXG5leHBvcnQgY2xhc3MgTm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKGBub3QgZm91bmQ6ICR7dmFsdWV9YCk7XG4gIH1cbn1cblxuIiwgbnVsbCwgIlxuaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tU3RhdGljID0gKC4uLnBhdGhzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nID0+XG4gIGZyb21QYWNrYWdlcygnYXNzZXQtc3RhdGljJywgLi4ucGF0aHMpO1xuXG4iLCAiXG5pbXBvcnQgeyBmcm9tU3RhdGljIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljJztcbmltcG9ydCB0eXBlIHsgX01haWxQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9tYWlsL3V0aWxzL21haWwvX21haWwubW9kZWxzJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCBFbWFpbCBmcm9tICdlbWFpbC10ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNwb3J0IH0gZnJvbSAnbm9kZW1haWxlcic7XG5cbmNvbnN0IHRyYW5zcG9ydCA9IGNyZWF0ZVRyYW5zcG9ydCh7XG4gIGF1dGg6IHsgcGFzczogcHJvY2Vzcy5lbnYuU0VSVkVSX0VNQUlMX1BBU1NXT1JELCB1c2VyOiBwcm9jZXNzLmVudi5TRVJWRVJfRU1BSUxfVVNFUk5BTUUgfSxcbiAgaG9zdDogcHJvY2Vzcy5lbnYuU0VSVkVSX0VNQUlMX0hPU1QsXG4gIHBvb2w6IHRydWUsXG4gIHBvcnQ6IHRvTnVtYmVyKHByb2Nlc3MuZW52LlNFUlZFUl9FTUFJTF9QT1JUKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgX21haWwgPSBhc3luYyA8VFBhcmFtcz4oe1xuICBmcm9tLFxuICBwYXJhbXMsXG4gIHRlbXBsYXRlLFxuICB0byxcbn06IF9NYWlsUGFyYW1zTW9kZWw8VFBhcmFtcz4pOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgID8gYXdhaXQgbmV3IEVtYWlsKHtcbiAgICAgICAgc2VuZDogdHJ1ZSxcbiAgICAgICAgdHJhbnNwb3J0LFxuICAgICAgICB2aWV3czogeyByb290OiBmcm9tU3RhdGljKCdtYWlsL3RlbXBsYXRlcycpIH0sXG4gICAgICB9KS5zZW5kKHsgbG9jYWxzOiBwYXJhbXMsIG1lc3NhZ2U6IHsgZnJvbSwgdG8gfSwgdGVtcGxhdGUgfSlcbiAgICA6IGRlYnVnKGBmcm9tOiAke2Zyb219OyB0bzogJHt0b307IHRlbXBsYXRlOiAke3RlbXBsYXRlfTsgcGFyYW1zOiAke0pTT04uc3RyaW5naWZ5KHBhcmFtcyl9YCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuIiwgIlxuZXhwb3J0IGNvbnN0IEhUVFBfU1RBVFVTX0NPREUgPSB7XG4gIEJBRF9SRVFVRVNUOiA0MDAsXG4gIEZPUkJJRERFTjogNDAzLFxuICBHQVRFV0FZX1RJTUVPVVQ6IDUwNCxcbiAgSU5URVJOQUxfU0VSVkVSX0VSUk9SOiA1MDAsXG4gIFNFUlZJQ0VfVU5BVkFJTEFCTEU6IDUwMyxcbiAgVU5BVVRIT1JJWkVEOiA0MDEsXG59O1xuXG4iLCAiXG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgSHR0cEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBzdGF0dXNDb2RlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3Ioc3RhdHVzQ29kZT86IG51bWJlciwgbWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZSB8fCBIVFRQX1NUQVRVU19DT0RFLklOVEVSTkFMX1NFUlZFUl9FUlJPUjtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICcnO1xuICB9XG59XG5cbiIsICJcbmltcG9ydCB7IEh0dHBFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3InO1xuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIEludmFsaWRPdHBFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLkZPUkJJRERFTiwgbWVzc2FnZSk7XG4gIH1cbn1cblxuIiwgbnVsbCwgIlxuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknO1xuXG5leHBvcnQgY29uc3QgX3dpdGhJbmplY3QgPSA8VFR5cGUgZXh0ZW5kcyBDb25zdHJ1Y3Rvck1vZGVsPih2YWx1ZTogVFR5cGUpOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICBpbmplY3QodmFsdWUpO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9SYW5kb21JbnRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NyeXB0by91dGlscy9yYW5kb21JbnQvX3JhbmRvbUludC5tb2RlbHMnO1xuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSAnY3J5cHRvJztcblxuZXhwb3J0IGNvbnN0IF9yYW5kb21JbnQ6IF9SYW5kb21JbnRNb2RlbCA9IChsZW5ndGgpID0+XG4gIHJhbmRvbUludCgxMCAqKiAobGVuZ3RoIC0gMSksIDEwICoqIGxlbmd0aCAtIDEpO1xuXG4iLCBudWxsLCAiXG5pbXBvcnQgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBTSUdOX0lOX1JFU09VUkNFX05BTUUgPSAnU2lnbkluJztcblxuZXhwb3J0IGNvbnN0IFVTRVJOQU1FX1VQREFURSA9IGBVc2VyZW5hbWUke1JFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURX1gO1xuXG4iLCBudWxsLCAiXG5pbXBvcnQgeyBDdHggfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgX3dpdGhDb250ZXh0ID0gKCk6IFBhcmFtZXRlckRlY29yYXRvciA9PiAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcGFyYW1ldGVySW5kZXgpID0+XG4gIEN0eCgpKHRhcmdldCwgcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KTtcblxuIiwgbnVsbCwgIlxuaW1wb3J0IHsgQWNjZXNzU2VydmljZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzU2VydmljZS9BY2Nlc3NTZXJ2aWNlJztcbmltcG9ydCB0eXBlIHsgQXV0aG9yaXplUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC91dGlscy9hdXRob3JpemUvYXV0aG9yaXplLm1vZGVscyc7XG5pbXBvcnQgeyBBQ0NFU1NfUk9MRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5cbmV4cG9ydCBjb25zdCBhdXRob3JpemUgPSBhc3luYyAoeyBjb250ZXh0LCByb2xlcyB9OiBBdXRob3JpemVQYXJhbXNNb2RlbCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICBpZiAocm9sZXMpIHtcbiAgICBpZiAoY29udGV4dC51c2VyKSB7XG4gICAgICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgQ29udGFpbmVyLmdldChBY2Nlc3NTZXJ2aWNlKS5nZXQoe1xuICAgICAgICBmaWx0ZXI6IHsgX3VpZDogY29udGV4dC51c2VyLl9pZCB9LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0ID8gcm9sZXMuaW5jbHVkZXMocmVzdWx0LnJvbGUpIDogZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiByb2xlcy5pbmNsdWRlcyhBQ0NFU1NfUk9MRS5BTlkpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbiIsIG51bGwsIG51bGwsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgRmxhdHRlbk9iamVjdFBhcmFtcyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmxhdHRlbk9iamVjdC9mbGF0dGVuT2JqZWN0Lm1vZGVscyc7XG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0LCByZWR1Y2UsIHNvbWUgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY29uc3QgZmxhdHRlbk9iamVjdCA9ICh7XG4gIHZhbHVlLFxuICBwYXRoID0gW10sXG4gIGRlbGltaXRlciA9ICcuJyxcbiAgcHJlZml4ZXMgPSBbJyQnXSxcbn06IEZsYXR0ZW5PYmplY3RQYXJhbXMpOiBvYmplY3QgPT5cbiAgKGlzUGxhaW5PYmplY3QodmFsdWUpXG4gICAgPyByZWR1Y2UoXG4gICAgICAgIHZhbHVlIGFzIHVua25vd24gYXMgb2JqZWN0LFxuICAgICAgICAocmVzdWx0LCB2LCBrKSA9PlxuICAgICAgICAgIHNvbWUocHJlZml4ZXMsIChwcmVmaXgpID0+IGsuc3RhcnRzV2l0aChwcmVmaXgpKVxuICAgICAgICAgICAgPyB7IC4uLnJlc3VsdCwgW1suLi5wYXRoLCBrXS5qb2luKGRlbGltaXRlcildOiB2IH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAuLi5mbGF0dGVuT2JqZWN0KHsgZGVsaW1pdGVyLCBwYXRoOiBbLi4ucGF0aCwga10sIHByZWZpeGVzLCB2YWx1ZTogdiB9KSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAge30sXG4gICAgICApXG4gICAgOiBwYXRoLmxlbmd0aFxuICAgID8geyBbcGF0aC5qb2luKGRlbGltaXRlcildOiB2YWx1ZSB9XG4gICAgOiB2YWx1ZSkgYXMgb2JqZWN0O1xuXG4iLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgeyBBY2Nlc3NSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzUmVzb2x2ZXIvQWNjZXNzUmVzb2x2ZXInO1xuaW1wb3J0IHsgT3RwUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvT3RwL090cFJlc29sdmVyL090cFJlc29sdmVyJztcbmltcG9ydCB7IFNpZ25JblJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW5SZXNvbHZlci9TaWduSW5SZXNvbHZlcic7XG5pbXBvcnQgeyBhdXRob3JpemUgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC91dGlscy9hdXRob3JpemUvYXV0aG9yaXplJztcbmltcG9ydCB7IGZyb21TdGF0aWMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMnO1xuaW1wb3J0IHsgTGlua2VkVXNlclJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvTGlua2VkVXNlclJlc29sdmVyL0xpbmtlZFVzZXJSZXNvbHZlcic7XG5pbXBvcnQgeyBVc2VyUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyUmVzb2x2ZXIvVXNlclJlc29sdmVyJztcbmltcG9ydCB0eXBlIHsgR3JhcGhxbENvbmZpZ1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvaHR0cC9ncmFwaHFsL2dyYXBocWwubW9kZWxzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5cbmV4cG9ydCBjb25zdCBncmFwaHFsQ29uZmlnOiBHcmFwaHFsQ29uZmlnUGFyYW1zTW9kZWwgPSB7XG4gIGF1dGhvcml6ZSxcblxuICBjb250YWluZXI6IENvbnRhaW5lcixcblxuICByZXNvbHZlcnM6IFtBY2Nlc3NSZXNvbHZlciwgT3RwUmVzb2x2ZXIsIExpbmtlZFVzZXJSZXNvbHZlciwgU2lnbkluUmVzb2x2ZXIsIFVzZXJSZXNvbHZlcl0sXG5cbiAgc2NoZW1hUGF0aDogZnJvbVN0YXRpYygnZ3JhcGhxbC9zY2hlbWEuZ3FsJyksXG59O1xuXG4iLCAiXG5pbXBvcnQgeyBfZ3JhcGhxbENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2h0dHAvZ3JhcGhxbC9fZ3JhcGhxbC5jb25maWcnO1xuaW1wb3J0IHsgZ3JhcGhxbENvbmZpZyBhcyBjb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9odHRwL2dyYXBocWwvY29uZmlncy9ncmFwaHFsLmNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBncmFwaHFsQ29uZmlnID0gX2dyYXBocWxDb25maWcoY29uZmlnKTtcblxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBR0Esa0JBQ0FBLGdCQUVNLFdBTU87QUFaYjtBQUFBO0FBQUE7QUFHQSx1QkFBMEI7QUFDMUIsSUFBQUEsaUJBQTJCO0FBRTNCLElBQU0sWUFBWSxJQUFJLDJCQUFVO0FBQUEsTUFDOUIsb0JBQW9CO0FBQUEsTUFDcEIsY0FBYztBQUFBLE1BQ2QscUJBQXFCO0FBQUEsSUFDdkIsQ0FBQztBQUVNLElBQU0sYUFBOEI7QUFBQSxNQUN6QyxLQUFLLENBQVEsU0FBa0QsVUFBVSxJQUFJLElBQUk7QUFBQSxNQUVqRixLQUFLLENBQ0gsTUFDQSxVQUNTO0FBQ1QsdUNBQVcsS0FBSyxJQUNaLFVBQVUsS0FBWSxJQUFJLEVBQUUsR0FBRyxLQUFnQyxJQUMvRCxVQUFVLEtB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b2Rhc2giLCAiaW5pdF9Db250YWluZXIiLCAiaW1wb3J0X2xvZGFzaCIsICJmb3JtYXQiLCAibW9tZW50IiwgImluaXRfZGF0ZVRpbWVGb3JtYXQiLCAiaW5pdF9kYXRlVGltZUZvcm1hdCIsICJpbml0X2xvZ2dlciIsICJpbXBvcnRfcmVmbGVjdF9tZXRhZGF0YSIsICJpbXBvcnRfbG9kYXNoIiwgImluaXRfbG9nZ2VyIiwgImluaXRfRGF0YWJhc2UiLCAiaW1wb3J0X2NvcmUiLCAiaW1wb3J0X2NvcmUiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpc0FycmF5IiwgImltcG9ydF9jb3JlIiwgImltcG9ydF9sb2Rhc2giLCAiaW1wb3J0X2xvZGFzaCIsICJFbnRpdHlSZXNvdXJjZSIsICJFbWJlZGRlZFJlc291cmNlIiwgIkNhcmQiLCAiTGlua2VkVXNlciIsICJVc2VyIiwgIl9iIiwgIl9hIiwgIkFjY2Vzc0Zvcm0iLCAiQWNjZXNzIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaW5pdF9PdHBfY29uc3RhbnRzIiwgImluaXRfT3RwX2NvbnN0YW50cyIsICJPdHBGb3JtIiwgIk90cCIsICJfYSIsICJEdW1teUVtYmVkZGVkUmVzb3VyY2UiLCAiX2EiLCAiX2IiLCAiRHVtbXlFbnRpdHlSZXNvdXJjZSIsICJfYiIsICJfYSIsICJfYyIsICJfZCIsICJpbml0X2RhdGFiYXNlX2NvbmZpZyIsICJpbXBvcnRfaW52ZXJzaWZ5IiwgImluaXRfd2l0aENvbnRhaW5lciIsICJpbml0X0NvbnRhaW5lciIsICJpbml0X0RhdGFiYXNlIiwgImluaXRfZGF0YWJhc2VfY29uZmlnIiwgImluaXRfd2l0aENvbnRhaW5lciIsICJEYXRhYmFzZU1haW4iLCAiYWRtaW4iLCAiaW1wb3J0X2xvZGFzaCIsICJpbml0X0NvbnRhaW5lciIsICJpc0luaXRpYWxpemVkIiwgImluaXRpYWxpemUiLCAiRGF0YWJhc2VNYWluIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiYXV0aG9yaXplIiwgImNvbnRhaW5lciIsICJpbXBvcnRfbG9kYXNoIiwgImluaXRfQ29udGFpbmVyIiwgImluaXRfd2l0aENvbnRhaW5lciIsICJBY2Nlc3NTZXJ2aWNlIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgIlBhZ2luYXRpb24iLCAiUm9vdCIsICJSRVNPVVJDRV9NRVRIT0RfVFlQRSIsICJSb290IiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiQXJnRGVjb3JhdG9yIiwgIlBhZ2VJbmZvIiwgIl9hIiwgIlJvb3QiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbml0X3dpdGhDb250YWluZXIiLCAiaW5pdF9Db250YWluZXIiLCAiaW1wb3J0X2xvZGFzaCIsICJfYSIsICJfYiIsICJfYyIsICJfZCIsICJpbml0X3dpdGhDb250YWluZXIiLCAiaW5pdF93aXRoQ29udGFpbmVyIiwgIlVzZXJTZXJ2aWNlIiwgImluaXRfd2l0aENvbnRhaW5lciIsICJpbml0X0NvbnRhaW5lciIsICJBY2Nlc3NSZXNvbHZlciIsICJfYSIsICJfYiIsICJpbml0X2xvZ2dlciIsICJpbXBvcnRfbG9kYXNoIiwgImZyb21TdGF0aWMiLCAiaW5pdF9PdHBfY29uc3RhbnRzIiwgImluaXRfd2l0aENvbnRhaW5lciIsICJpbXBvcnRfaW52ZXJzaWZ5IiwgImluaXRfQ29udGFpbmVyIiwgIk90cFNlcnZpY2UiLCAiX2EiLCAiaW5pdF9PdHBfY29uc3RhbnRzIiwgImluaXRfd2l0aENvbnRhaW5lciIsICJPdHBSZXNvbHZlciIsICJfYSIsICJfYiIsICJTaWduSW5Gb3JtIiwgIlNpZ25JbiIsICJpbml0X3dpdGhDb250YWluZXIiLCAiaW1wb3J0X2xvZGFzaCIsICJTaWduSW5TZXJ2aWNlIiwgIl9hIiwgIl9iIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaW5pdF93aXRoQ29udGFpbmVyIiwgIlNpZ25JblJlc29sdmVyIiwgIl9hIiwgIl9iIiwgImluaXRfQ29udGFpbmVyIiwgImluaXRfd2l0aENvbnRhaW5lciIsICJpbml0X3dpdGhDb250YWluZXIiLCAiaW5pdF9Db250YWluZXIiLCAiaW1wb3J0X2xvZGFzaCIsICJpbXBvcnRfbG9kYXNoIiwgInJlc3VsdCIsICJpbml0X3dpdGhDb250YWluZXIiLCAiTGlua2VkVXNlclNlcnZpY2UiLCAiaW5pdF93aXRoQ29udGFpbmVyIiwgIkxpbmtlZFVzZXJSZXNvbHZlciIsICJpbml0X3dpdGhDb250YWluZXIiLCAiVXNlclJlc29sdmVyIiwgImluaXRfQ29udGFpbmVyIiwgImdyYXBocWxDb25maWciLCAiaW5pdF9sb2dnZXIiLCAiaXNJbml0aWFsaXplZCIsICJncmFwaHFsQ29uZmlnIiwgImluaXRpYWxpemUiXQp9Cg==
