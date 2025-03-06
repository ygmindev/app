import { cleanDocument } from '@lib/backend/database/utils/cleanDocument/cleanDocument';
import { type _DatabaseModel } from '@lib/backend/database/utils/Database/_Database.models';
import { type RepositoryModel } from '@lib/backend/database/utils/Database/Database.models';
import { getConnection } from '@lib/backend/database/utils/getConnection/getConnection';
import { _database } from '@lib/config/database/_database';
import {
  type _DatabaseConfigModel,
  type DatabaseConfigModel,
} from '@lib/config/database/database.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { UninitializedError } from '@lib/shared/core/errors/UninitializedError/UninitializedError';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceNameParamsModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';
import {
  type FilterConditionModel,
  type FilterModel,
} from '@lib/shared/resource/utils/Filter/Filter.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { type UpdateModel } from '@lib/shared/resource/utils/Update/Update.models';
import { MikroORM } from '@mikro-orm/mongodb';
import { type EntityManager } from '@mikro-orm/mongodb';
import last from 'lodash/last';
import { type Document, type Filter, type MongoError, ObjectId, type UpdateFilter } from 'mongodb';

export const getFilter = <TType extends unknown>(
  filters?: Array<FilterModel<TType>>,
  prefix?: string,
): Filter<TType> =>
  filters
    ? filters.reduce((result, v) => {
        const conditionF = v.condition ?? FILTER_CONDITION.EQUAL;
        return {
          ...result,
          [prefix ? `${prefix}.${v.field}` : v.field]: (
            [
              FILTER_CONDITION.CONTAINS,
              FILTER_CONDITION.NOT_CONTAINS,
            ] as Array<FilterConditionModel>
          ).includes(conditionF)
            ? {
                $options: 'i',
                $regex:
                  conditionF === FILTER_CONDITION.CONTAINS
                    ? `${v.value as string}`
                    : `^((?!${v.value as string}).)*\$`,
              }
            : {
                [conditionF]: last(v.field.split('.'))?.startsWith('_')
                  ? isArray(v.value)
                    ? v.value.map((vv) => new ObjectId(`${vv as string}`))
                    : new ObjectId(v.value as string)
                  : v.value,
              },
        };
      }, {} as Filter<TType>)
    : {};

export class _Database implements _DatabaseModel {
  protected _config: _DatabaseConfigModel;
  protected _entityManager?: EntityManager;

  constructor(config: DatabaseConfigModel) {
    this._config = _database(config);
  }

  async flush(): Promise<void> {
    const em = this._getEntityManager();
    await em.flush();
  }

  async isConnected(): Promise<boolean> {
    return this._entityManager?.getConnection().isConnected() ?? false;
  }

  async connect(): Promise<void> {
    if (await this.isConnected()) {
      logger.info('reusing connection', this._config.clientUrl);
    } else {
      logger.info('connecting', this._config.clientUrl);
      this._entityManager = (await MikroORM.init(this._config)).em;
    }
  }

  _getEntityManager = (): EntityManager => {
    const em = this._entityManager;
    if (em) {
      return em.fork();
    }
    throw new UninitializedError('database');
  };

  getRepository = <TType, TForm = EntityResourceDataModel<TType>>({
    name,
  }: ResourceNameParamsModel): RepositoryModel<TType, TForm> => {
    const implementation: RepositoryModel<TType, TForm> = {
      clear: async () => {
        await this._getEntityManager().getRepository(name).nativeDelete({});
      },

      count: async () => this._getEntityManager().getRepository(name).count(),

      create: async ({ form, options } = {}) => {
        try {
          const em = this._getEntityManager();
          const formF = cleanDocument(form);
          console.warn('@@@');
          console.warn(formF);
          console.warn(stringify(formF));
          console.warn('\n');
          const result = em.create(name, formF as object);
          !options?.isCommitted && (await em.persistAndFlush(result));
          return { result: result as PartialModel<TType> };
        } catch (e) {
          switch ((e as MongoError).code as unknown as number) {
            case 11000:
              throw new DuplicateError(name);
            default:
              throw e;
          }
        }
      },

      createMany: async ({ form } = {}) => {
        try {
          const em = this._getEntityManager();
          const formF = form?.map(cleanDocument);
          const result = await em.insertMany(name, formF as Array<object>);
          return { result: result as Array<PartialModel<TType>> };
        } catch (e) {
          switch ((e as MongoError).code as unknown as number) {
            case 11000:
              throw new DuplicateError(name);
            default:
              throw e;
          }
        }
      },

      get: async ({ filter, options } = {}) => {
        const em = this._getEntityManager();
        const filterF = cleanDocument(getFilter<TType>(filter));
        const collection = em.getCollection(name);
        const result = (await (options?.aggregate
          ? collection
              .aggregate([
                { $match: filterF },
                ...(options
                  ? filterNil([
                      options.project && { $project: options.project },
                      ...(options.aggregate ?? []),
                    ])
                  : []),
              ] as unknown as Array<Document>)
              .next()
          : collection.findOne(
              filterF as Filter<Document>,
              options && { projection: options.project },
            ))) as PartialModel<TType>;
        return { result: result ?? undefined };
      },

      getConnection: async ({ filter, pagination } = {}) => {
        const { result } = await getConnection({
          count: await implementation.count(),
          getMany: implementation.getMany,
          input: { filter },
          pagination,
        });
        return { result: result ?? undefined };
      },

      getMany: async ({ filter, options } = {}) => {
        const em = this._getEntityManager();
        const collection = em.getCollection(name);
        const filterF = cleanDocument(getFilter<TType>(filter));
        const result = await (options && options.aggregate
          ? collection
              .aggregate([
                { $match: filterF },
                ...(options
                  ? [
                      options.project && { $project: options.project },
                      options.take && { $limit: options.take + (options.skip ?? 0) },
                      options.skip && { $skip: options.skip },
                      ...(options.aggregate ?? []),
                    ]
                  : []),
              ] as unknown as Document[])
              .toArray()
          : collection
              .find(
                filterF as Filter<Document>,
                options && { limit: options.take, projection: options.project, skip: options.skip },
              )
              .toArray());
        return { result: (result as Array<PartialModel<TType>>) ?? undefined };
      },

      remove: async ({ filter } = {}) => {
        const em = this._getEntityManager();
        const filterF = getFilter<TType>(filter);
        const entity = await implementation.get({ filter });
        await em.getRepository(name).nativeDelete(filterF);
        // TODO: don't return for remove?
        return entity as unknown as OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType>;
      },

      search: async ({ keys, query } = {}) => {
        if (query) {
          // TODO: handle keys as regex
          const em = this._getEntityManager();
          const collection = em.getCollection(name);
          const result = await collection.find({ $text: { $search: query } }).toArray();
          return { result } as unknown as OutputModel<RESOURCE_METHOD_TYPE.SEARCH, TType>;
        }
        return { result: [] } as unknown as OutputModel<RESOURCE_METHOD_TYPE.SEARCH, TType>;
      },

      update: async ({ filter, options, update } = {}) => {
        const em = this._getEntityManager();
        const filterF = cleanDocument(getFilter<TType>(filter));
        const updateF = cleanDocument(update);
        updateF &&
          Object.keys(updateF).forEach((key) => {
            const keyF = key as keyof UpdateModel<TType>;
            if (!key.startsWith('$')) {
              updateF['$set'] = {
                ...((updateF['$set'] as object) ?? {}),
                [key]: updateF[keyF],
              } as EntityResourceDataModel<TType>;
              delete updateF[keyF];
            }
          });

        const result = await em
          .getConnection()
          .getCollection(name)
          .findOneAndUpdate(filterF as Filter<Document>, updateF as UpdateFilter<object>, {
            projection: options?.project,
            returnDocument: 'after',
            upsert: true,
          });
        return { result } as OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType>;
      },
    };
    return implementation;
  };

  close = async (): Promise<void> => {
    if (await this.isConnected()) {
      logger.debug('closing connections', this._config.clientUrl);
      await this._getEntityManager().getConnection()?.close();
    }
  };
}
