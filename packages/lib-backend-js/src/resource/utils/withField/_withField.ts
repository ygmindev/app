import {
  type _WithFieldModel,
  type _WithFieldParamsModel,
} from '@lib/backend/resource/utils/withField/_withField.models';
import { FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import { Collection } from '@mikro-orm/core';
import {
  ArrayType,
  Embedded,
  type EntityClass,
  Index,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryKey,
  Property,
  type PropertyOptions,
} from '@mikro-orm/mongodb';
import { Field, Float } from 'type-graphql';

// import schemas from '../../../../../lib-model-js/__dist__/schemas.json';

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
    type,
  }: _WithFieldParamsModel<TType> = {}): _WithFieldModel =>
  (target, propertyKey) => {
    // const name = target?.constructor?.name;
    // const schema = name
    //   ? (schemas as Record<string, Record<string, FieldSchemaModel>>)[name]?.[propertyKey as string]
    //   : undefined;

    // const typeF = type ?? schema?.type;
    // const isArrayF = isArray ?? schema?.isArray;
    const typeF = type;
    const isArrayF = isArray;

    const isResource = !!Resource;
    const isId = typeF === PROPERTY_TYPE.ID || typeF === PROPERTY_TYPE.PRIMARY_KEY;
    const isDate = typeF === DATA_TYPE.DATE;

    let gqlType: () => object = () => String;
    let ormType: PropertyOptions<unknown>['type'] = 'string';

    if (isResource) {
      gqlType = () => Resource();
    } else {
      if (isId) {
        ormType = 'ObjectId';
      } else if (isDate) {
        ormType = Date;
        gqlType = () => Date;
      } else {
        switch (typeF) {
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
        }
      }
    }
    if (isArrayF) {
      ormType = ArrayType;
      gqlType = () => [gqlType()];
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
            Embedded({ array: isArrayF, entity, nullable: isOptional, object: !isArrayF })(
              target,
              propertyKey as string,
            );
            break;
          }
          case FIELD_RELATION.MANY_TO_MANY: {
            ManyToMany({
              ...options,
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
              entity,
              mappedBy: root as StringKeyModel<TType>,
              nullable: true,
              orphanRemoval: true,
              ref: true,
            })(target, propertyKey as string);
            break;
          }
          case FIELD_RELATION.MANY_TO_ONE: {
            ManyToOne({ ...options, entity })(target, propertyKey as string);
            break;
          }
          case FIELD_RELATION.ONE_TO_ONE: {
            OneToOne({ ...options, entity, mappedBy: root, owner: !root })(
              target,
              propertyKey as string,
            );
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
        (isId ? PrimaryKey(options) : Property(options))(target, propertyKey as string);
      }
    }
  };
