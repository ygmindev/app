import { cleanDocument } from '@lib/backend/database/utils/cleanDocument/cleanDocument';
import type {
  DatabaseModel,
  DatabaseParamsModel,
  RepositoryModel,
} from '@lib/backend/database/utils/Database/Database.models';
import { getConnection } from '@lib/backend/database/utils/getConnection/getConnection';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { UninitializedError } from '@lib/shared/core/errors/UninitializedError/UninitializedError';
import { debug } from '@lib/shared/logging/utils/logger/logger';
import type { WithResourceNameModel } from '@lib/shared/resource/decorators/withResourceName/withResourceName.models';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import type { ResultModel } from '@lib/shared/resource/utils/Result/Result.models';
import type { FilterQuery } from '@mikro-orm/core';
import { MikroORM } from '@mikro-orm/core';
import type { EntityManager, MongoDriver } from '@mikro-orm/mongodb';
import { get, keys, set, unset } from 'lodash';

export abstract class _Database implements DatabaseModel {
  protected _params: DatabaseParamsModel;
  protected _entityManager?: EntityManager;

  constructor(params: DatabaseParamsModel) {
    this._params = params;
  }

  async bootstrap(): Promise<void> {
    this._entityManager = (
      await MikroORM.init<MongoDriver>({
        clientUrl: this._params.host,
        dbName: this._params.database,
        entities: this._params.entities,
        password: this._params.password || undefined,
        type: this._params.type,
        user: this._params.username || undefined,
      })
    ).em;
  }

  _getEntityManager = (): EntityManager => {
    const _em = this._entityManager;
    if (_em) {
      return _em.fork({});
    }
    throw new UninitializedError(`database ${this._params.host}`);
  };

  getRepository = <TType>({ name }: WithResourceNameModel): RepositoryModel<TType> => {
    const _service: RepositoryModel<TType> = {
      clear: async () => {
        await this._getEntityManager()
          .getRepository<TType & object>(name)
          .nativeDelete({} as FilterQuery<TType & object>);
      },
      count: async () => this._getEntityManager().getRepository<TType & object>(name).count(),

      create: async ({ form }) => {
        try {
          const _repository = this._getEntityManager().getRepository<TType & object>(name);
          const result = await _repository.create(cleanDocument(form) as TType & object);
          await _repository.persist(result).flush();
          return { result };
        } catch (e) {
          switch (get(e, 'code')) {
            case 11000:
              throw new DuplicateError(name);
            default:
              throw e;
          }
        }
      },

      get: async ({ filter, options }) => {
        const collection = this._getEntityManager().getCollection(name);
        const result = (await (options && options.aggregate
          ? collection
              .aggregate(
                [
                  { $match: cleanDocument(filter) },
                  ...(options
                    ? [
                        options.project && { $project: options.project },
                        ...(options.aggregate || []),
                      ]
                    : []),
                ].filter(Boolean) as unknown as Document[],
              )
              .next()
          : collection.findOne(
              cleanDocument(filter) as object,
              options && { projection: options.project },
            ))) as TType;
        return { result: result || undefined };
      },

      getConnection: async ({ filter, pagination }) => {
        const result = await getConnection<TType>({
          count: await _service.count(),
          filter,
          getMany: _service.getMany,
          pagination,
        });
        return { result: result || undefined };
      },

      getMany: async ({ filter, options }) => {
        const collection = this._getEntityManager().getCollection(name);
        const result = (await (options && options.aggregate
          ? collection
              .aggregate(
                [
                  { $match: cleanDocument(filter) },
                  ...(options
                    ? [
                        options.project && { $project: options.project },
                        options.take && { $limit: options.take + (options.skip || 0) },
                        options.skip && { $skip: options.skip },
                        ...(options.aggregate || []),
                      ]
                    : []),
                ].filter(Boolean) as unknown as Document[],
              )
              .toArray()
          : collection
              .find(
                cleanDocument(filter) as object,
                options && { limit: options.take, projection: options.project, skip: options.skip },
              )
              .toArray())) as TType[];
        return { result: result || undefined };
      },

      remove: async ({ filter }) => {
        const entity = await _service.get({ filter });
        await this._getEntityManager()
          .getRepository<TType & object>(name)
          .nativeDelete(cleanDocument(filter) as FilterQuery<TType & object>);
        return entity as unknown as OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType>;
      },
      update: async ({ filter, options, update }) => {
        const _em = this._entityManager;
        if (_em) {
          const _update = cleanDocument(update);
          keys(_update).forEach((key) => {
            const _value = (_update as Record<string, unknown>)[key];
            key.startsWith('$') || (unset(_update, key) && set(_update, '$set', { [key]: _value }));
          });
          const result = (
            await _em
              .fork({})
              .getConnection()
              .getCollection<TType & object>(name)
              .findOneAndUpdate(cleanDocument(filter) as object, _update as object, {
                projection: options?.project,
                returnDocument: 'after',
              })
          ).value as ResultModel<RESOURCE_METHOD_TYPE.UPDATE, TType>;

          return { result };
        }
        throw new UninitializedError(`database ${this._params.host}`);
      },
    };
    return _service;
  };

  close = async (): Promise<void> => {
    debug('Closing database connections');
    await this._getEntityManager().getConnection().close();
  };
}
