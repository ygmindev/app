import { cleanDocument } from '@lib/backend/database/utils/cleanDocument/cleanDocument';
import type {
  DatabaseModel,
  RepositoryModel,
} from '@lib/backend/database/utils/Database/Database.models';
import { getConnection } from '@lib/backend/database/utils/getConnection/getConnection';
import type { _DatabaseConfigModel } from '@lib/config/database/database.models';
import type { PartialDeepModel, ReturnTypeModel } from '@lib/shared/core/core.models';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { UninitializedError } from '@lib/shared/core/errors/UninitializedError/UninitializedError';
import { debug } from '@lib/shared/logging/utils/logger/logger';
import type { WithResourceNameModel } from '@lib/shared/resource/decorators/withResourceName/withResourceName.models';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import type { UpdateModel } from '@lib/shared/resource/utils/Update/Update.models';
import type { FilterQuery } from '@mikro-orm/core';
import { MikroORM } from '@mikro-orm/core';
import type { EntityManager, MongoDriver } from '@mikro-orm/mongodb';
import type { Filter, MongoError, UpdateFilter } from 'mongodb';

export abstract class _Database implements DatabaseModel {
  protected _config: ReturnTypeModel<_DatabaseConfigModel>;
  protected _entityManager?: EntityManager;

  constructor(config: ReturnTypeModel<_DatabaseConfigModel>) {
    this._config = config;
  }

  async connect(): Promise<void> {
    this._entityManager =
      this._entityManager ?? (await MikroORM.init<MongoDriver>(this._config)).em;
  }

  _getEntityManager = (): EntityManager => {
    const em = this._entityManager;
    if (em) {
      return em.fork();
    }
    throw new UninitializedError(`database ${this._config.host}`);
  };

  getRepository = <TType extends unknown>({
    name,
  }: WithResourceNameModel): RepositoryModel<TType> => {
    const service: RepositoryModel<TType> = {
      clear: async () => {
        await this._getEntityManager()
          .getRepository<TType & object>(name)
          .nativeDelete({} as FilterQuery<TType & object>);
      },

      count: async () => this._getEntityManager().getRepository<TType & object>(name).count(),

      create: async ({ form }) => {
        const em = this._getEntityManager();
        try {
          const formF = cleanDocument(form) as TType & object;
          const result = em.create<TType & object>(name, formF);
          await em.persistAndFlush(result);
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
        const filterF = cleanDocument(filter) as object;
        const collection = em.getCollection(name);
        const result = (await (options && options.aggregate
          ? collection
              .aggregate(
                [
                  { $match: filterF },
                  ...(options
                    ? [
                        options.project && { $project: options.project },
                        ...(options.aggregate ?? []),
                      ]
                    : []),
                ].filter(Boolean) as unknown as Document[],
              )
              .next()
          : collection.findOne(filterF, options && { projection: options.project }))) as TType;
        return { result: result ?? undefined };
      },

      getConnection: async ({ filter, pagination }) => {
        const filterF = cleanDocument(filter);
        const result = await getConnection({
          count: await service.count(),
          getMany: service.getMany,
          input: { filter: filterF },
          pagination,
        });
        return { result: result ?? undefined };
      },

      getMany: async ({ filter, options }) => {
        const em = this._getEntityManager();
        const collection = em.getCollection(name);
        const filterF = cleanDocument(filter) as object;
        const result = (await (options && options.aggregate
          ? collection
              .aggregate(
                [
                  { $match: filterF },
                  ...(options
                    ? [
                        options.project && { $project: options.project },
                        options.take && { $limit: options.take + (options.skip ?? 0) },
                        options.skip && { $skip: options.skip },
                        ...(options.aggregate ?? []),
                      ]
                    : []),
                ].filter(Boolean) as unknown as Document[],
              )
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
        const filterF = cleanDocument(filter) as FilterQuery<TType & object>;
        const entity = await service.get({ filter });
        await em.getRepository<TType & object>(name).nativeDelete(filterF);
        return entity as unknown as OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType>;
      },

      update: async ({ filter, options, update }) => {
        const em = this._getEntityManager();
        const filterF = cleanDocument(filter) as Filter<TType & object>;
        const updateF = cleanDocument(update);
        Object.keys(updateF).forEach((key) => {
          const keyF = key as string & keyof UpdateModel<TType>;
          if (!keyF.startsWith('$')) {
            updateF['$set'] = {
              ...(updateF['$set'] ?? {}),
              [keyF]: updateF[keyF],
            } as PartialDeepModel<EntityResourceDataModel<TType>>;
            delete updateF[keyF];
          }
        });

        const { value: result } = await em
          .getConnection()
          .getCollection<TType & object>(name)
          .findOneAndUpdate(
            filterF as Filter<TType & object>,
            updateF as UpdateFilter<TType & object>,
            {
              projection: options?.project ? cleanDocument(options.project) : undefined,
              returnDocument: 'after',
            },
          );
        return { result } as OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType>;
      },
    };
    return service;
  };

  close = async (): Promise<void> => {
    debug('closing database connections');
    await this._getEntityManager().getConnection().close();
  };
}
