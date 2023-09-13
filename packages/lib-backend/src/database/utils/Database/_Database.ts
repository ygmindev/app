import { type FilterQuery } from '@mikro-orm/core';
import { MikroORM } from '@mikro-orm/core';
import { type EntityManager, type MongoDriver } from '@mikro-orm/mongodb';
import { type Filter, type MongoError, type UpdateFilter } from 'mongodb';

import { cleanDocument } from '#lib-backend/database/utils/cleanDocument/cleanDocument';
import { type _DatabaseModel } from '#lib-backend/database/utils/Database/_Database.models';
import { type RepositoryModel } from '#lib-backend/database/utils/Database/Database.models';
import { getConnection } from '#lib-backend/database/utils/getConnection/getConnection';
import { type _DatabaseConfigModel } from '#lib-config/database/database.models';
import { type PartialDeepModel } from '#lib-shared/core/core.models';
import { DuplicateError } from '#lib-shared/core/errors/DuplicateError/DuplicateError';
import { UninitializedError } from '#lib-shared/core/errors/UninitializedError/UninitializedError';
import { debug, info } from '#lib-shared/logging/utils/logger/logger';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type ResourceNameParamsModel } from '#lib-shared/resource/resource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { FILTER_CONDITION } from '#lib-shared/resource/utils/Filter/Filter.constants';
import {
  type FilterConditionModel,
  type FilterModel,
} from '#lib-shared/resource/utils/Filter/Filter.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import { type UpdateModel } from '#lib-shared/resource/utils/Update/Update.models';

const getFilter = <TType>(filters?: Array<FilterModel<TType>>): Filter<TType & object> =>
  filters
    ? filters.reduce(
        (result, v) => {
          const conditionF = v.condition ?? FILTER_CONDITION.EQUAL;
          return {
            ...result,
            [v.field]: (
              [
                FILTER_CONDITION.CONTAINS,
                FILTER_CONDITION.NOT_CONTAINS,
              ] as Array<FilterConditionModel>
            ).includes(conditionF)
              ? { $regex: new RegExp(v.value, 'i') }
              : { [conditionF]: v.value },
          };
        },
        {} as Filter<TType & object>,
      )
    : {};

export class _Database implements _DatabaseModel {
  protected _config: _DatabaseConfigModel;
  protected _entityManager?: EntityManager;

  constructor(config: _DatabaseConfigModel) {
    this._config = config;
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
      info('reusing connection', this._config.clientUrl);
    } else {
      info('connecting', this._config.clientUrl);
      this._entityManager = (await MikroORM.init<MongoDriver>(this._config)).em;
    }
  }

  _getEntityManager = (): EntityManager => {
    const em = this._entityManager;
    if (em) {
      return em.fork();
    }
    throw new UninitializedError('database');
  };

  getRepository = <TType extends unknown>({
    name,
  }: ResourceNameParamsModel): RepositoryModel<TType> => {
    const service: RepositoryModel<TType> = {
      clear: async () => {
        await this._getEntityManager()
          .getRepository<TType & object>(name)
          .nativeDelete({} as FilterQuery<TType & object>);
      },

      count: async () => this._getEntityManager().getRepository<TType & object>(name).count(),

      create: async ({ form, options }) => {
        const em = this._getEntityManager();
        try {
          const formF = cleanDocument(form) as TType & object;
          const result = em.create<TType & object>(name, formF);
          !options?.isCommitted && (await em.persistAndFlush(result));
          return { result };
        } catch (e) {
          switch ((e as MongoError).code as unknown as number) {
            case 11000:
              throw new DuplicateError(name);
            default:
              throw e;
          }
        }
      },

      get: async ({ filter, options }) => {
        const em = this._getEntityManager();
        const filterF = getFilter<TType>(filter) as FilterQuery<TType & object>;
        const collection = em.getCollection(name);
        const result = (await (options?.aggregate
          ? collection
              .aggregate([
                { $match: filterF },
                ...(options
                  ? [options.project && { $project: options.project }, ...(options.aggregate ?? [])]
                  : []),
              ] as unknown as Document[])
              .next()
          : collection.findOne(filterF, options && { projection: options.project }))) as TType;
        return { result: result ?? undefined };
      },

      getConnection: async ({ filter, pagination }) => {
        const result = await getConnection({
          count: await service.count(),
          getMany: service.getMany,
          input: { filter },
          pagination,
        });
        return { result: result ?? undefined };
      },

      getMany: async ({ filter, options }) => {
        const em = this._getEntityManager();
        const collection = em.getCollection(name);
        const filterF = getFilter<TType>(filter) as FilterQuery<TType & object>;
        const result = (await (options && options.aggregate
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
                filterF,
                options && { limit: options.take, projection: options.project, skip: options.skip },
              )
              .toArray())) as Array<TType>;
        return { result: result ?? undefined };
      },

      remove: async ({ filter }) => {
        const em = this._getEntityManager();
        const filterF = getFilter<TType>(filter) as FilterQuery<TType & object>;
        const entity = await service.get({ filter });
        await em.getRepository<TType & object>(name).nativeDelete(filterF);
        return entity as unknown as OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType>;
      },

      update: async ({ filter, options, update }) => {
        const em = this._getEntityManager();
        const filterF = getFilter<TType>(filter);
        const updateF = cleanDocument(update);
        Object.keys(updateF).forEach((key) => {
          const keyF = key as keyof UpdateModel<TType>;
          if (!key.startsWith('$')) {
            updateF['$set'] = {
              ...(updateF['$set'] ?? {}),
              [key]: updateF[keyF],
            } as PartialDeepModel<EntityResourceDataModel<TType>>;
            delete updateF[keyF];
          }
        });

        const { value: result } = await em
          .getConnection()
          .getCollection<TType & object>(name)
          .findOneAndUpdate(filterF, updateF as UpdateFilter<TType & object>, {
            projection: options?.project ? cleanDocument(options.project) : undefined,
            returnDocument: 'after',
          });
        return { result } as OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType>;
      },
    };
    return service;
  };

  close = async (): Promise<void> => {
    debug('closing connections', this._config.clientUrl);
    if (await this.isConnected()) {
      await this._getEntityManager().getConnection()?.close();
    }
  };
}
