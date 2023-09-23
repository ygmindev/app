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
} from '@mikro-orm/core';
import { Field, Float } from 'type-graphql';
import { type ReturnTypeFuncValue } from 'type-graphql/dist/decorators/types';

import { FIELD_RELATION } from '#lib-backend/resource/utils/withField/withField.constants';
import {
  type WithFieldModel,
  type WithFieldParamsModel,
} from '#lib-backend/resource/utils/withField/withField.models';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { DATA_TYPE, PROPERTY_TYPE } from '#lib-shared/data/data.constants';

const getField = <TType extends unknown>({
  Resource,
  isArray,
  type,
}: WithFieldParamsModel<TType>): PropertyDecorator => {
  if (Resource) {
    return Field(() => (isArray ? [Resource()] : Resource()) as ReturnTypeFuncValue, {
      simple: true,
    });
  }
  switch (type) {
    case DATA_TYPE.STRING:
      return Field(() => (isArray ? [String] : String));
    case DATA_TYPE.BOOLEAN:
      return Field(() => (isArray ? [Boolean] : Boolean));
    case DATA_TYPE.DATE:
      return Field(() => (isArray ? [Date] : Date));
    case DATA_TYPE.NUMBER:
      return Field(() => (isArray ? [Float] : Float));
    default:
      return Field(() => (isArray ? [String] : String));
  }
};

const getColumn = <TType extends unknown>({
  Resource,
  defaultValue,
  isArray,
  isOptional,
  name,
  relation,
  root,
  type,
}: WithFieldParamsModel<TType>): PropertyDecorator => {
  if (Resource) {
    if (isArray) {
      switch (relation) {
        case FIELD_RELATION.MANY_TO_MANY:
          return ManyToMany(
            Resource as () => EntityClass<TType>,
            root ? root : undefined,
            name ? { joinColumn: `_${name}` } : {},
          ) as PropertyDecorator;
        case FIELD_RELATION.ONE_TO_MANY:
          return OneToMany(
            Resource as () => EntityClass<TType>,
            root ?? ('' as StringKeyModel<TType>),
            root ? { joinColumn: `_${root}` } : {},
          ) as PropertyDecorator;
        default:
          return Embedded(() => Resource, {
            array: true,
            nullable: isOptional,
          }) as PropertyDecorator;
      }
    }
    switch (relation) {
      case FIELD_RELATION.MANY_TO_ONE:
        return ManyToOne(
          Resource as () => EntityClass<TType>,
          name ? { joinColumn: `_${name}` } : {},
        ) as PropertyDecorator;
      case FIELD_RELATION.ONE_TO_ONE:
        return OneToOne(
          Resource as () => EntityClass<TType>,
          name ? { joinColumn: `_${name}` } : {},
        ) as PropertyDecorator;
      default:
        return Property({ nullable: isOptional, type: () => Resource }) as PropertyDecorator;
    }
  }
  const [Field, _options] = (() => {
    if (isArray) {
      return [Property, { defaultValue, type: ArrayType }];
    }
    switch (type) {
      case PROPERTY_TYPE.PRIMARY_KEY:
        return [PrimaryKey, { defaultValue, type: 'ObjectId' }];
      case PROPERTY_TYPE.ID:
        return [Property, { defaultValue, type: 'ObjectId' }];
      case DATA_TYPE.STRING:
        return [Property, { defaultValue, type: 'string' }];
      case DATA_TYPE.NUMBER:
        return [Property, { defaultValue, type: 'number' }];
      case DATA_TYPE.DATE:
        return [Property, { defaultValue, type: Date }];
      default:
        return [Property, { defaultValue, type: undefined }];
    }
  })();

  return Field({
    ..._options,
    nullable: isOptional,
    onCreate: defaultValue ?? undefined,
  }) as PropertyDecorator;
};

export const withField =
  <TType>({
    Resource,
    defaultValue,
    expire,
    isArray,
    isOptional,
    isRepository = false,
    isSchema = true,
    isUnique,
    name,
    relation,
    root,
    type,
  }: WithFieldParamsModel<TType>): WithFieldModel =>
  (target, propertyKey) => {
    (expire || isUnique) &&
      (Index({ options: expire ? { expireAfterSeconds: expire } : {} }) as PropertyDecorator)(
        target,
        propertyKey,
      );

    isSchema &&
      getField({ Resource, isArray, isOptional, name, relation, root, type })(target, propertyKey);

    isRepository &&
      getColumn({ Resource, defaultValue, isArray, isOptional, name, relation, root, type })(
        target,
        propertyKey,
      );
  };
