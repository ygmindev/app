import {
  type _WithFieldModel,
  type _WithFieldParamsModel,
} from '@lib/backend/resource/utils/withField/_withField.models';
import { FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import { Cascade } from '@mikro-orm/core';
import {
  Embedded,
  Index,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/decorators/legacy';
import { ArrayType, type EntityClass, ObjectId, type PropertyOptions } from '@mikro-orm/mongodb';
import { GraphQLJSONObject } from 'graphql-type-json';
import { Field, Float } from 'type-graphql';

export const _withField =
  <TType extends unknown>({
    defaultValue,
    expire,
    isArray,
    isDatabase = false,
    isOptional,
    isSchema = true,
    isUnique,
    relation,
    Resource,
    root,
    type = DATA_TYPE.STRING,
  }: _WithFieldParamsModel<TType> = {}): _WithFieldModel =>
  (target, propertyKey) => {
    const isResource = !!Resource;
    const isId = type === PROPERTY_TYPE.ID || type === PROPERTY_TYPE.PRIMARY_KEY;
    const isDate = type === DATA_TYPE.DATE;

    let gqlType: () => object = () => String;
    let ormType: PropertyOptions<unknown>['type'] = 'string';

    if (isResource) {
      gqlType = () => Resource();
    } else {
      if (isId) {
        ormType = ObjectId;
      } else if (isDate) {
        ormType = Date;
        gqlType = () => Date;
      } else {
        switch (type) {
          case DATA_TYPE.STRING: {
            ormType = 'string';
            gqlType = () => String;
            break;
          }
          case DATA_TYPE.NUMBER: {
            ormType = 'number';
            gqlType = () => Float;
            break;
          }
          case DATA_TYPE.BOOLEAN: {
            ormType = 'bool';
            gqlType = () => Boolean;
            break;
          }
          case DATA_TYPE.JSON: {
            ormType = 'json';
            gqlType = () => GraphQLJSONObject;
            break;
          }
        }
      }
    }
    if (isArray) {
      ormType = ArrayType;
      const gqlTypeF = gqlType;
      gqlType = () => [gqlTypeF()];
    }

    // GraphQl
    if (isSchema) {
      Field(gqlType, { nullable: isOptional, simple: true })(target, propertyKey);
    }

    // Database
    if (isDatabase) {
      if (expire || isUnique) {
        (
          Index({
            options: expire ? { expireAfterSeconds: expire } : {},
          }) as unknown as PropertyDecorator
        )(target, propertyKey);
      }
      const options: PropertyOptions<object> = { nullable: isOptional, onCreate: defaultValue };
      if (isResource) {
        const entity = Resource as () => EntityClass<TType>;
        switch (relation) {
          case FIELD_RELATION.EMBEDDED: {
            Embedded({
              ...options,
              array: isArray,
              entity,
              object: !isArray,
            })(target, propertyKey);
            break;
          }
          case FIELD_RELATION.MANY_TO_MANY: {
            ManyToMany({
              ...options,
              cascade: [Cascade.ALL],
              entity,
              mappedBy: root,
              owner: !root,
            })(target, propertyKey);
            // if (!Object.prototype.hasOwnProperty.call(target, propertyKey)) {
            //   const cacheKey = Symbol(propertyKey);

            //   Object.defineProperty(target, propertyKey, {
            //     configurable: true,
            //     enumerable: true,
            //     get() {
            //       // 1. Check if the ORM has already set a value on this instance
            //       // This is the key: if the ORM populated the field, use that.
            //       if (this[cacheKey]) return this[cacheKey];

            //       // 2. Otherwise, return an empty, initialized collection
            //       // We set isInitialized: true so toJSON() doesn't hide it
            //       const collection = new Collection(this);
            //       collection.populated(true);

            //       this[cacheKey] = collection;
            //       return collection;
            //     },
            //     set(value) {
            //       // 3. Handle incoming values (either from ORM or user)
            //       if (value instanceof Collection) {
            //         this[cacheKey] = value;
            //       } else {
            //         const collection = new Collection(this, value, Array.isArray(value));
            //         // If we are setting a value, mark it as populated so toJSON() sees it
            //         collection.populated(true);
            //         this[cacheKey] = collection;
            //       }
            //     },
            //   });
            // }
            break;
          }
          case FIELD_RELATION.ONE_TO_MANY: {
            OneToMany({
              ...options,
              cascade: [Cascade.ALL],
              entity,
              mappedBy: root,
              nullable: true,
              orphanRemoval: true,
              // ref: true,
            })(target, propertyKey);
            // if (!Object.prototype.hasOwnProperty.call(target, propertyKey)) {
            //   const cacheKey = Symbol(propertyKey);

            //   Object.defineProperty(target, propertyKey, {
            //     configurable: true,
            //     enumerable: true,
            //     get() {
            //       // 1. Check if the ORM has already set a value on this instance
            //       // This is the key: if the ORM populated the field, use that.
            //       if (this[cacheKey]) return this[cacheKey];

            //       // 2. Otherwise, return an empty, initialized collection
            //       // We set isInitialized: true so toJSON() doesn't hide it
            //       const collection = new Collection(this);
            //       collection.populated(true);

            //       this[cacheKey] = collection;
            //       return collection;
            //     },
            //     set(value) {
            //       // 3. Handle incoming values (either from ORM or user)
            //       if (value instanceof Collection) {
            //         this[cacheKey] = value;
            //       } else {
            //         const collection = new Collection(this, value, Array.isArray(value));
            //         // If we are setting a value, mark it as populated so toJSON() sees it
            //         collection.populated(true);
            //         this[cacheKey] = collection;
            //       }
            //     },
            //   });
            // }
            break;
          }
          case FIELD_RELATION.MANY_TO_ONE: {
            ManyToOne({
              ...options,
              cascade: [Cascade.ALL],
              entity,
              ref: true,
            })(target, propertyKey);
            break;
          }
          case FIELD_RELATION.ONE_TO_ONE: {
            OneToOne({
              ...options,
              cascade: [Cascade.ALL],
              entity,
              mappedBy: root,
              orphanRemoval: true,
              owner: !root,
            })(target, propertyKey);
            break;
          }
          default: {
            Property({ ...options, type: () => Resource })(target, propertyKey);
            break;
          }
        }
      } else {
        options.type = ormType;
        (isId ? PrimaryKey({ ...options, fieldName: '_id' }) : Property(options))(
          target,
          propertyKey,
        );
      }
    }
  };
