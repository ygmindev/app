import {
  type _DatabaseModel,
  type GetRepositoryParamsModel,
} from '@lib/backend/database/utils/Database/_Database.models';
import { type RepositoryModel } from '@lib/backend/database/utils/Database/Database.models';
import { mongoFilter } from '@lib/backend/database/utils/mongoFilter/mongoFilter';
import { ObjectId } from '@lib/backend/database/utils/ObjectId/ObjectId';
import { _database } from '@lib/config/database/_database';
import {
  type _DatabaseConfigModel,
  type DatabaseConfigModel,
} from '@lib/config/database/database.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type ClassModel, type PartialArrayModel } from '@lib/shared/core/core.models';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { UninitializedError } from '@lib/shared/core/errors/UninitializedError/UninitializedError';
import { Bootstrappable } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import {
  type EntityName,
  type FilterQuery,
  type FindOptions,
  ReferenceKind,
  wrap,
} from '@mikro-orm/core';
import {
  type EntityManager,
  type FindOneOptions,
  MikroORM,
  type Primary,
  type RequiredEntityData,
} from '@mikro-orm/mongodb';
import forEach from 'lodash/forEach';
import isNil from 'lodash/isNil';
import toString from 'lodash/toString';
import {
  type Collection,
  type Document,
  type Filter,
  type MatchKeysAndValues,
  type MongoError,
} from 'mongodb';

const normalize = <TType extends unknown>(
  params?: Partial<TType> | null,
): Partial<TType> | undefined => {
  if (isNil(params)) return undefined;
  const result = params as Partial<EntityResourceModel>;
  if (result.id) {
    result._id = result.id;
    delete result.id;
  }
  return result as Partial<TType>;
};

const ensureObjectId = (id: string | ObjectId): string => {
  return (id
    ? typeof id === 'string'
      ? new ObjectId(id)
      : id
    : new ObjectId()) as unknown as string;
};

export class _Database extends Bootstrappable implements _DatabaseModel {
  protected config: _DatabaseConfigModel;
  protected orm?: MikroORM;

  constructor(config: DatabaseConfigModel) {
    super();
    this.config = _database(config);
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
                  {},
                )
              : undefined,
          ),

      create: async ({ form, options } = {}) => {
        try {
          const em = this.getEntityManager();
          const formF = cleanObject(form);
          const result = em.create(
            name,
            this.hydrate(name, formF) as unknown as RequiredEntityData<
              Pick<TType, keyof TType>,
              never,
              false
            >,
            { persist: true },
          );
          options?.isFlush !== false && (await em.persist(result).flush());
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
        options?.isFlush !== false && (await em.persist(result).flush());
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

      getMany: async ({ filter, id, options } = {}) => {
        const isCursor = options?.cursor;
        const isOffset = options?.page;
        if (isCursor && isOffset) {
          throw new InvalidArgumentError('cursor and page cannot be used together');
        }
        const sortBy = options?.sortBy ?? [{ key: '_id' }];
        if (isCursor) {
          console.warn('@@@ options');
          console.warn(options);
          return {
            result: { items: [] },
          };
        }
        const em = this.getEntityManager();
        const filterF = mongoFilter<TType>({ filter, id }).reduce(
          (result, v) => ({ ...result, [v.field]: { [v.condition]: v.value } }),
          {} as FilterQuery<NoInfer<NonNullable<TType>>>,
        );
        const result = await em.find(
          name,
          filterF,
          options &&
            ({ limit: options.limit, populate: options.populate } as FindOptions<
              NonNullable<TType>,
              string,
              '*',
              never
            >),
        );
        return {
          result: {
            items: filterNil(result.map(normalize)) as PartialArrayModel<TType>,
          },
        };
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

      subscribe: async (params) => {
        // TODO: implement subscribe?
        return { result: {} };
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
    const em = this.getEntityManager();

    if (isLeaf) {
      const entity = em.create(name as EntityName<object>, {}) as EntityResourceModel;
      wrap(entity).assign(form, { em, mergeEmbeddedProperties: true, mergeObjectProperties: true });
      entity._id = ensureObjectId(entity._id);
      return entity as unknown as Partial<TType>;
    }

    const formF = { ...form } as Record<string, unknown>;
    const meta = em.getMetadata().get(name);
    forEach(meta.properties, (prop) => {
      const value = formF[prop.name];
      if (isNil(value)) return;
      switch (prop.kind) {
        case ReferenceKind.EMBEDDED:
        case ReferenceKind.ONE_TO_MANY:
        case ReferenceKind.MANY_TO_MANY: {
          if (isArray(value)) {
            formF[prop.name] = value.map((v) => this.hydrate(prop.type, v as string));
          }
          break;
        }
        case ReferenceKind.MANY_TO_ONE: {
          formF[prop.name] = this.hydrate(prop.type, value);
          break;
        }
      }
    });

    const entity = em.create(name as EntityName<object>, formF) as EntityResourceModel;
    entity._id = ensureObjectId(entity._id as string);
    return entity as unknown as Partial<TType>;
  };

  async isConnected(): Promise<boolean> {
    return this.orm?.em?.getConnection().isConnected() ?? false;
  }

  async onCleanUp(): Promise<void> {
    await this.getEntityManager().getConnection()?.close();
  }

  async onInitialize(): Promise<void> {
    this.orm = await MikroORM.init(this.config);
  }
}
