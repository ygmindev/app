import {
  type _DatabaseModel,
  type GetRepositoryParamsModel,
} from '@lib/backend/database/utils/Database/_Database.models';
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
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';
import {
  type EntityManager,
  type FilterQuery,
  type FindOneOptions,
  MikroORM,
  type Primary,
  type RequiredEntityData,
  wrap,
} from '@mikro-orm/mongodb';
import isString from 'lodash/isString';
import last from 'lodash/last';
import toString from 'lodash/toString';
import { type MongoError, ObjectId } from 'mongodb';

export const getFilter = <TType extends unknown>(
  filters?: Array<FilterModel<TType>>,
  prefix?: string,
): FilterQuery<NoInfer<NonNullable<TType>>> =>
  cleanObject(
    filters?.reduce(
      (result, v) => ({
        ...result,
        [prefix ? `${prefix}.${v.field}` : v.field]: {
          [v.condition ?? FILTER_CONDITION.EQUAL]: last(v.field.split('.'))?.startsWith('_')
            ? isArray(v.value)
              ? v.value.map((vv) => (isString(vv) ? new ObjectId(vv) : vv))
              : isString(v.value)
                ? new ObjectId(v.value)
                : v.value
            : v.value,
        },
      }),
      {} as FilterQuery<NoInfer<NonNullable<TType>>>,
    ) ?? {},
  );

export class _Database implements _DatabaseModel {
  protected config: _DatabaseConfigModel;
  protected em?: EntityManager;

  constructor(config: DatabaseConfigModel) {
    this.config = _database(config);
  }

  async flush(): Promise<void> {
    await this.getEntityManager().flush();
  }

  async isConnected(): Promise<boolean> {
    return this.em?.getConnection().isConnected() ?? false;
  }

  async connect(): Promise<void> {
    if (await this.isConnected()) {
      logger.info('reusing connection', this.config.clientUrl);
    } else {
      logger.info('connecting', this.config.clientUrl);
      this.em = (await MikroORM.init(this.config)).em;
    }
  }

  getEntityManager = (): EntityManager => {
    const { em } = this;
    if (em) {
      return em.fork();
    }
    throw new UninitializedError('database');
  };

  getRepository = <TType extends unknown>({
    name,
  }: GetRepositoryParamsModel<TType>): RepositoryModel<TType> => {
    const implementation: RepositoryModel<TType> = {
      clear: async () => {
        await this.getEntityManager().getRepository(name).nativeDelete({});
      },

      count: async (filter?) =>
        this.getEntityManager().getRepository(name).count(getFilter<TType>(filter)),

      create: async ({ form, options } = {}) => {
        try {
          const em = this.getEntityManager();
          const result = em.create(
            name,
            form as RequiredEntityData<Pick<TType, keyof TType>, never, false>,
          );
          options?.isFlush !== false && (await em.persistAndFlush(result));
          return { result: result as PartialModel<TType> };
        } catch (e) {
          switch ((e as MongoError).code as unknown as number) {
            case 11000:
              throw new DuplicateError(toString(name));
            default:
              throw e;
          }
        }
      },

      createMany: async ({ form, options } = {}) => {
        const em = this.getEntityManager();
        const result = await Promise.all(
          form?.map(
            async (v) =>
              (await implementation.create({ form: v, options: { isFlush: false } })).result,
          ) ?? [],
        );
        options?.isFlush !== false && (await em.persistAndFlush(result));
        return { result: result as Array<PartialModel<TType>> };
      },

      flush: async () => {
        await this.getEntityManager().flush();
      },

      get: async ({ filter, id, options } = {}) => {
        const em = this.getEntityManager();
        const filterF =
          (id as FilterQuery<NoInfer<NonNullable<TType>>>) ?? getFilter<TType>(filter);
        const result = await em.findOne(
          name,
          filterF,
          options &&
            ({ populate: options.populate ?? undefined } as FindOneOptions<
              NonNullable<TType>,
              string,
              '*',
              never
            >),
        );
        return { result: result ?? undefined };
      },

      getConnection: async ({ filter, pagination } = {}) => {
        const { result } = await getConnection({
          count: await implementation.count(filter),
          getMany: implementation.getMany,
          input: { filter },
          pagination,
        });
        return { result: result ?? undefined };
      },

      getMany: async ({ filter, options } = {}) => {
        const em = this.getEntityManager();
        const filterF = getFilter<TType>(filter);
        const result = await em.find(
          name,
          filterF,
          options && { limit: options.take, offset: options.skip },
        );
        return { result: (result as Array<PartialModel<TType>>) ?? undefined };
      },

      remove: async ({ filter, id, options } = {}) => {
        const em = this.getEntityManager();
        if (id) {
          const ref = em.getReference(name, id as Primary<TType>);
          const result = em.remove(ref);
          options?.isFlush !== false && (await result.flush());
        } else {
          const filterF = getFilter<TType>(filter);
          await em.getRepository(name).nativeDelete(filterF);
          options?.isFlush !== false && (await implementation.flush());
        }
        return { result: true };
      },

      search: async ({ keys, query } = {}) => {
        if (query) {
          // TODO: handle keys as regex
          const em = this.getEntityManager();
          const collection = em.getCollection(name);
          const result = await collection.find({ $text: { $search: query } }).toArray();
          return { result } as unknown as ResourceOutputModel<RESOURCE_METHOD_TYPE.SEARCH, TType>;
        }
        return { result: [] } as unknown as ResourceOutputModel<RESOURCE_METHOD_TYPE.SEARCH, TType>;
      },

      update: async ({ filter, id, options, update } = {}) => {
        const em = this.getEntityManager();
        const updateF = cleanObject(update);
        const { result } = await implementation.get({ filter, id });
        if (result) {
          wrap(result).assign(updateF as object, {
            mergeObjectProperties: true,
            updateByPrimaryKey: true,
          });
          options?.isFlush !== false && (await em.persistAndFlush(result));
        }
        return { result } as ResourceOutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType>;
      },
    };
    return implementation;
  };

  close = async (): Promise<void> => {
    if (await this.isConnected()) {
      logger.debug('closing connections', this.config.clientUrl);
      await this.getEntityManager().getConnection()?.close();
    }
  };
}
