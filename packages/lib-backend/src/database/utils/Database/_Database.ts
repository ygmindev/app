import { cleanDocument } from '@lib/backend/database/utils/cleanDocument/cleanDocument';
import type {
  DatabaseModel,
  DatabaseParamsModel,
  RepositoryModel,
} from '@lib/backend/database/utils/Database/Database.models';
import { getConnection } from '@lib/backend/database/utils/getConnection/getConnection';
import { _databaseConfig } from '@lib/config/database/_database.config';
import type { PartialDeepModel } from '@lib/shared/core/core.models';
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
import type { Filter, UpdateFilter } from '@mikro-orm/mongodb/node_modules/mongodb';
import type { MongoError } from 'mongodb';

export abstract class _Database implements DatabaseModel {
  protected _params: DatabaseParamsModel;
  protected _entityManager?: EntityManager;

  constructor(params: DatabaseParamsModel) {
    this._params = params;
  }

  async initialize(): Promise<void> {
    this._entityManager =
      this._entityManager ?? (await MikroORM.init<MongoDriver>(_databaseConfig(this._params))).em;
  }

  _getEntityManager = (): EntityManager => {
    const _em = this._entityManager;
    if (_em) {
      return _em.fork();
    }
    throw new UninitializedError(`database ${this._params.host}`);
  };

  getRepository = <TType extends unknown>({
    name,
  }: WithResourceNameModel): RepositoryModel<TType> => {
    const _service: RepositoryModel<TType> = {
      clear: async () => {
        await this._getEntityManager()
          .getRepository<TType & object>(name)
          .nativeDelete({} as FilterQuery<TType & object>);
      },
      count: async () => this._getEntityManager().getRepository<TType & object>(name).count(),

      create: async ({ form }) => {
        try {
          const _form = cleanDocument(form) as TType & object;
          const _repository = this._getEntityManager().getRepository<TType & object>(name);
          const result = await _repository.create(_form);
          await _repository.persist(result).flush();
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
        const _filter = cleanDocument(filter) as object;
        const collection = this._getEntityManager().getCollection(name);
        const result = (await (options && options.aggregate
          ? collection
              .aggregate(
                [
                  { $match: _filter },
                  ...(options
                    ? [
                        options.project && { $project: options.project },
                        ...(options.aggregate ?? []),
                      ]
                    : []),
                ].filter(Boolean) as unknown as Document[],
              )
              .next()
          : collection.findOne(_filter, options && { projection: options.project }))) as TType;
        return { result: result ?? undefined };
      },

      getConnection: async ({ filter, pagination }) => {
        const _filter = cleanDocument(filter);
        const result = await getConnection({
          count: await _service.count(),
          getMany: _service.getMany,
          input: { filter: _filter },
          pagination,
        });
        return { result: result ?? undefined };
      },

      getMany: async ({ filter, options }) => {
        const collection = this._getEntityManager().getCollection(name);
        const _filter = cleanDocument(filter) as object;
        const result = (await (options && options.aggregate
          ? collection
              .aggregate(
                [
                  { $match: _filter },
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
                _filter,
                options && { limit: options.take, projection: options.project, skip: options.skip },
              )
              .toArray())) as Array<TType>;
        return { result: result ?? undefined };
      },

      remove: async ({ filter }) => {
        const _filter = cleanDocument(filter) as FilterQuery<TType & object>;
        const entity = await _service.get({ filter });
        await this._getEntityManager().getRepository<TType & object>(name).nativeDelete(_filter);
        return entity as unknown as OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType>;
      },

      update: async ({ filter, options, update }) => {
        const _em = this._entityManager;
        if (_em) {
          const _filter = cleanDocument(filter) as Filter<TType & object>;
          const _update = cleanDocument(update);
          Object.keys(_update).forEach((key) => {
            const _key = key as string & keyof UpdateModel<TType>;
            if (!_key.startsWith('$')) {
              _update['$set'] = {
                ...(_update['$set'] ?? {}),
                [_key]: _update[_key],
              } as PartialDeepModel<EntityResourceDataModel<TType>>;
              delete _update[_key];
            }
          });
          const { value: result } = await _em
            .fork({})
            .getConnection()
            .getCollection<TType & object>(name)
            .findOneAndUpdate(
              _filter as Filter<TType & object>,
              _update as UpdateFilter<TType & object>,
              {
                projection: options?.project ? cleanDocument(options.project) : undefined,
                returnDocument: 'after',
              },
            );
          return { result } as OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType>;
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
