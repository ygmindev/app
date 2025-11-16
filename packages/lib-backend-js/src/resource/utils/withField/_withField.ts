import {
  type _WithFieldModel,
  type _WithFieldParamsModel,
} from '@lib/backend/resource/utils/withField/_withField.models';
import { FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import { Cascade, Collection } from '@mikro-orm/core';
import {
  ArrayType,
  Embedded,
  type EntityClass,
  Index,
  ManyToMany,
  ManyToOne,
  ObjectId,
  OneToMany,
  OneToOne,
  PrimaryKey,
  Property,
  type PropertyOptions,
} from '@mikro-orm/mongodb';
import GraphQLJSON from 'graphql-type-json';
import { Field, Float } from 'type-graphql';

export const _withField =
  <TType extends unknown>({
    Resource,
    defaultValue,
    expire,
    isArray,
    isDatabase = false,
    isOptional,
    isSchema = true,
    isUnique,
    leaf,
    relation,
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
            gqlType = () => GraphQLJSON;
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
        (Index({ options: expire ? { expireAfterSeconds: expire } : {} }) as PropertyDecorator)(
          target,
          propertyKey,
        );
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
            })(target, propertyKey as string);
            break;
          }
          case FIELD_RELATION.MANY_TO_MANY: {
            ManyToMany({
              ...options,
              cascade: [Cascade.PERSIST],
              entity,
              inversedBy: leaf,
              mappedBy: root,
              owner: !root,
            })(target, propertyKey as string);
            break;
          }
          case FIELD_RELATION.ONE_TO_MANY: {
            OneToMany({
              ...options,
              cascade: [Cascade.PERSIST],
              entity,
              mappedBy: root as StringKeyModel<TType>,
              nullable: true,
              orphanRemoval: true,
              ref: true,
            })(target, propertyKey as string);
            break;
          }
          case FIELD_RELATION.MANY_TO_ONE: {
            ManyToOne({
              ...options,
              cascade: [Cascade.PERSIST],
              entity,
            })(target, propertyKey as string);
            break;
          }
          case FIELD_RELATION.ONE_TO_ONE: {
            OneToOne({
              ...options,
              cascade: [Cascade.PERSIST],
              entity,
              mappedBy: root,
              orphanRemoval: true,
              owner: !root,
            })(target, propertyKey as string);
            break;
          }
          default: {
            Property({ ...options, type: () => Resource })(target, propertyKey as string);
            break;
          }
        }

        if (
          relation === FIELD_RELATION.MANY_TO_MANY ||
          (relation === FIELD_RELATION.ONE_TO_MANY &&
            !Object.prototype.hasOwnProperty.call(target, propertyKey))
        ) {
          Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            value: new Collection<TType & object>(target),
            writable: true,
          });
        }
      } else {
        options.type = ormType;
        (isId ? PrimaryKey({ ...options, fieldName: '_id' }) : Property(options))(
          target,
          propertyKey as string,
        );
      }
    }
  };
