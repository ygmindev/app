import {
  type _DatabaseModel,
  type GetRepositoryParamsModel,
} from '@lib/backend/database/utils/Database/_Database.models';
import { type RepositoryModel } from '@lib/backend/database/utils/Database/Database.models';
import { getConnection } from '@lib/backend/database/utils/getConnection/getConnection';
import { mongoFilter } from '@lib/backend/database/utils/mongoFilter/mongoFilter';
import { _database } from '@lib/config/database/_database';
import {
  type _DatabaseConfigModel,
  type DatabaseConfigModel,
} from '@lib/config/database/database.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type ClassModel, type PartialArrayModel } from '@lib/shared/core/core.models';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { UninitializedError } from '@lib/shared/core/errors/UninitializedError/UninitializedError';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';
import { type EntityName, type FilterQuery, ReferenceKind, wrap } from '@mikro-orm/core';
import {
  type EntityManager,
  type FindOneOptions,
  MikroORM,
  type Primary,
  type RequiredEntityData,
} from '@mikro-orm/mongodb';
import forEach from 'lodash/forEach';
import isNil from 'lodash/isNil';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import toString from 'lodash/toString';
import {
  type Collection,
  type Document,
  type Filter,
  type MatchKeysAndValues,
  type MongoError,
  ObjectId,
} from 'mongodb';

const normalize = <TType extends unknown>(
  params?: Partial<TType> | null,
): Partial<TType> | undefined => {
  if (isNil(params)) return undefined;
  // const result = wrap(params).toObject() as unknown as Partial<EntityResourceModel>;
  const result = params as Partial<EntityResourceModel>;
  if (result.id) {
    result._id = result.id;
    delete result.id;
  }
  return result as Partial<TType>;
};

export class _Database implements _DatabaseModel {
  protected config: _DatabaseConfigModel;
  protected orm?: MikroORM;

  constructor(config: DatabaseConfigModel) {
    this.config = _database(config);
  }

  async close(): Promise<void> {
    await this.getEntityManager().getConnection()?.close();
  }

  async connect(): Promise<void> {
    this.orm = await MikroORM.init(this.config);
  }

  async flush(): Promise<void> {
    await this.getEntityManager().flush();
  }

  getEntityManager = (): EntityManager => {
    const em = this.orm?.em;
    if (em) {
      return em.fork();
    }
    throw new UninitializedError('database');
  };

  getRepositories = (): Array<string> => {
    return this.orm ? Object.keys(this.orm.getMetadata().getAll()) : [];
  };

  getRepository = <TType extends unknown>({
    name,
  }: GetRepositoryParamsModel<TType>): RepositoryModel<TType> => {
    const getCollection = (): Collection<TType & Document> => {
      const em = this.getEntityManager();
      const collection = em.getCollection(name);
      return collection as unknown as Collection<TType & Document>;
    };

    const implementation: RepositoryModel<TType> = {
      clear: async () => {
        await this.getEntityManager().getRepository(name).nativeDelete({});
      },

      collection: getCollection,

      count: async (params) =>
        this.getEntityManager()
          .getRepository(name)
          .count(
            params
              ? mongoFilter<TType>(params).reduce(
                  (result, v) => ({ ...result, [v.field]: { [v.condition]: v.value } }),
                  {} as FilterQuery<NoInfer<NonNullable<TType>>>,
                )
              : undefined,
          ),

      create: async ({ form, options } = {}) => {
        try {
          const em = this.getEntityManager();
          const result = em.create(
            name,
            this.hydrate(name, form) as unknown as RequiredEntityData<
              Pick<TType, keyof TType>,
              never,
              false
            >,
            { persist: true },
          );
          options?.isFlush !== false && (await em.persistAndFlush(result));
          return { result: normalize(result) };
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
        return { result: filterNil(result.map(normalize)) };
      },

      flush: async () => {
        await this.getEntityManager().flush();
      },

      get: async ({ filter, id, options } = {}) => {
        const em = this.getEntityManager();
        const filterF = mongoFilter<TType>({ filter, id }).reduce(
          (result, v) => ({ ...result, [v.field]: { [v.condition]: v.value } }),
          {} as FilterQuery<NoInfer<NonNullable<TType>>>,
        );
        const result = await em.findOne(
          name,
          (isEmpty(filterF) ? { $expr: { $eq: [1, 1] } } : filterF) as FilterQuery<
            NoInfer<NonNullable<TType>>
          >,
          options &&
            ({ populate: options.populate ?? undefined } as FindOneOptions<
              NonNullable<TType>,
              string,
              '*',
              never
            >),
        );
        return { result: normalize(result as Partial<TType>) ?? undefined };
      },

      getConnection: async ({ filter, id, pagination } = {}) => {
        const { result } = await getConnection({
          count: await implementation.count({ filter, id }),
          getMany: implementation.getMany,
          input: { filter, id },
          pagination,
        });
        return { result: result ?? undefined };
      },

      getMany: async ({ filter, id, options } = {}) => {
        const em = this.getEntityManager();
        const filterF = mongoFilter<TType>({ filter, id }).reduce(
          (result, v) => ({ ...result, [v.field]: { [v.condition]: v.value } }),
          {} as FilterQuery<NoInfer<NonNullable<TType>>>,
        );
        const result = await em.find(
          name,
          filterF,
          options && { limit: options.take, offset: options.skip },
        );
        return { result: filterNil(result.map(normalize)) as PartialArrayModel<TType> };
      },

      name,

      remove: async ({ filter, id, options } = {}) => {
        const em = this.getEntityManager();
        if (id) {
          const ref = em.getReference(name, id as Primary<TType>);
          const result = em.remove(ref);
          options?.isFlush !== false && (await result.flush());
        } else {
          const filterF = mongoFilter<TType>({ filter, id }).reduce(
            (result, v) => ({ ...result, [v.field]: { [v.condition]: v.value } }),
            {} as FilterQuery<NoInfer<NonNullable<TType>>>,
          );
          await em.getRepository(name).nativeDelete(filterF);
          options?.isFlush !== false && (await implementation.flush());
        }
        return { result: true };
      },

      search: async ({ keys, query } = {}) => {
        if (query) {
          // TODO: handle keys as regex
          const collection = getCollection();
          const result = await collection.find({ $text: { $search: query } }).toArray();
          return { result } as unknown as ResourceOutputModel<RESOURCE_METHOD_TYPE.SEARCH, TType>;
        }
        return { result: [] } as unknown as ResourceOutputModel<RESOURCE_METHOD_TYPE.SEARCH, TType>;
      },

      update: async ({ id, options, update } = {}) => {
        const updateF = cleanObject(update);
        const collection = getCollection();
        const result = await collection.findOneAndUpdate(
          { _id: new ObjectId(id) } as Filter<TType & Document>,
          { $set: updateF as MatchKeysAndValues<TType & Document> },
          { returnDocument: 'after', upsert: options?.isUpsert },
        );
        return { result } as ResourceOutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType>;
      },
      updateMany: async ({ filter, id, options, update } = {}) => {
        const filterF = mongoFilter<TType>({ filter, id }).reduce(
          (result, v) => ({ ...result, [v.field]: { [v.condition]: v.value } }),
          {} as FilterQuery<NoInfer<NonNullable<TType>>>,
        );
        const updateF = cleanObject(update);
        const collection = getCollection();
        const result = await collection.updateMany(filterF as Filter<TType & Document>, {
          $set: updateF as MatchKeysAndValues<TType & Document>,
        });
        return {
          result: result.acknowledged && (result.modifiedCount ?? 0) > 0,
        } as ResourceOutputModel<RESOURCE_METHOD_TYPE.UPDATE_MANY, TType>;
      },
    };
    return implementation;
  };

  hydrate = <TType extends unknown>(
    name: string | ClassModel<TType>,
    form?: Partial<TType>,
    isLeaf?: boolean,
  ): Partial<TType> => {
    if (!form) throw new NotFoundError('form');
    const formF = form as Record<string, unknown>;
    const em = this.getEntityManager();
    if (isLeaf) {
      const entity = em.create(name as EntityName<object>, {});
      wrap(entity).assign(form, { em, mergeEmbeddedProperties: true, mergeObjectProperties: true });
      const id = (entity as EntityResourceModel)._id;
      id &&
        ((entity as EntityResourceModel)._id = isString(id)
          ? (new ObjectId(id) as unknown as string)
          : id);
      return entity;
    }
    const meta = em.getMetadata().get(name);
    forEach(meta.properties, (v) => {
      const value = (form as Record<string, unknown>)[v.name];
      switch (v.kind) {
        case ReferenceKind.EMBEDDED:
        case ReferenceKind.ONE_TO_MANY:
        case ReferenceKind.MANY_TO_MANY: {
          if (isArray(value)) {
            formF[v.name] = value.map((vv) => em.create(v.type, vv as object));
          }
          break;
        }
        case ReferenceKind.MANY_TO_ONE: {
          if (!!value && isPlainObject(value)) {
            formF[v.name] = em.create(v.type, value);
          }
          break;
        }
      }
    });

    return formF as Partial<TType>;
  };

  async isConnected(): Promise<boolean> {
    return this.orm?.em?.getConnection().isConnected() ?? false;
  }
}
