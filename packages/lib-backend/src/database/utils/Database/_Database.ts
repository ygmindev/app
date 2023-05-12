import { cleanDocument } from '@lib/backend/database/utils/cleanDocument/cleanDocument';
import type {
  DatabaseModel,
  RepositoryModel,
} from '@lib/backend/database/utils/Database/Database.models';
import { getConnection } from '@lib/backend/database/utils/getConnection/getConnection';
import type { _DatabaseConfigModel } from '@lib/config/database/_database.models';
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
    const _em = this._entityManager;
    if (_em) {
      return _em.fork();
    }
    throw new UninitializedError(`database ${this._config.host}`);
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
        const _em = this._getEntityManager();
        try {
          const _form = cleanDocument(form) as TType & object;
          const result = _em.create<TType & object>(name, _form);
          await _em.persistAndFlush(result);
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
        const _em = this._getEntityManager();
        const _filter = cleanDocument(filter) as object;
        const _collection = _em.getCollection(name);
        const result = (await (options && options.aggregate
          ? _collection
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
          : _collection.findOne(_filter, options && { projection: options.project }))) as TType;
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
        const _em = this._getEntityManager();
        const _collection = _em.getCollection(name);
        const _filter = cleanDocument(filter) as object;
        const result = (await (options && options.aggregate
          ? _collection
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
          : _collection
              .find(
                _filter,
                options && { limit: options.take, projection: options.project, skip: options.skip },
              )
              .toArray())) as Array<TType>;
        return { result: result ?? undefined };
      },

      remove: async ({ filter }) => {
        const _em = this._getEntityManager();
        const _filter = cleanDocument(filter) as FilterQuery<TType & object>;
        const _entity = await _service.get({ filter });
        await _em.getRepository<TType & object>(name).nativeDelete(_filter);
        return _entity as unknown as OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType>;
      },

      update: async ({ filter, options, update }) => {
        const _em = this._getEntityManager();
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
      },
    };
    return _service;
  };

  close = async (): Promise<void> => {
    debug('Closing database connections');
    await this._getEntityManager().getConnection().close();
  };
}
