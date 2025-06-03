import {
  type _WithFieldModel,
  type _WithFieldParamsModel,
} from '@lib/backend/resource/utils/withField/_withField.models';
import { FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';
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

const getField = <TType extends unknown>({
  Resource,
  isArray,
  type,
}: _WithFieldParamsModel<TType>): _WithFieldModel => {
  if (Resource) {
    return Field(() => (isArray ? [Resource()] : Resource()), { simple: true });
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
  leaf,
  name,
  relation,
  root,
  type,
}: _WithFieldParamsModel<TType>): _WithFieldModel => {
  const defaultOptions: PropertyOptions<object> = { nullable: isOptional, onCreate: defaultValue };
  if (Resource) {
    switch (relation) {
      case FIELD_RELATION.EMBEDDED:
        return Embedded({
          array: isArray,
          entity: Resource as () => EntityClass<TType>,
          nullable: defaultOptions.nullable,
          object: !isArray,
        }) as PropertyDecorator;
      case FIELD_RELATION.MANY_TO_MANY:
        return ManyToMany({
          ...defaultOptions,
          entity: Resource as () => EntityClass<TType>,
          inversedBy: leaf,
          mappedBy: root,
          owner: !root,
        }) as PropertyDecorator;
      case FIELD_RELATION.ONE_TO_MANY:
        return OneToMany({
          ...defaultOptions,
          entity: Resource as () => EntityClass<TType>,
          mappedBy: root as StringKeyModel<TType>,
          nullable: true,
          orphanRemoval: true,
          ref: true,
        }) as PropertyDecorator;
      case FIELD_RELATION.MANY_TO_ONE:
        return ManyToOne({
          ...defaultOptions,
          entity: Resource as () => EntityClass<TType>,
        }) as PropertyDecorator;
      case FIELD_RELATION.ONE_TO_ONE:
        return OneToOne({
          ...defaultOptions,
          entity: Resource as () => EntityClass<TType>,
          mappedBy: root,
          owner: !root,
        }) as PropertyDecorator;
      default:
        return Property({ ...defaultOptions, type: () => Resource }) as PropertyDecorator;
    }
  }
  if (isArray) {
    return Property({ ...defaultOptions, type: ArrayType }) as PropertyDecorator;
  }
  switch (type) {
    case PROPERTY_TYPE.PRIMARY_KEY:
      return PrimaryKey({ ...defaultOptions, type: 'ObjectId' }) as PropertyDecorator;
    case PROPERTY_TYPE.ID:
      return Property({ ...defaultOptions, type: 'ObjectId' }) as PropertyDecorator;
    case DATA_TYPE.BOOLEAN:
      return Property({ ...defaultOptions, type: 'bool' }) as PropertyDecorator;
    case DATA_TYPE.STRING:
      return Property({ ...defaultOptions, type: 'string' }) as PropertyDecorator;
    case DATA_TYPE.NUMBER:
      return Property({ ...defaultOptions, type: 'number' }) as PropertyDecorator;
    case DATA_TYPE.DATE:
      return Property({ ...defaultOptions, type: Date }) as PropertyDecorator;
    default:
      return Property({ ...defaultOptions, type: undefined }) as PropertyDecorator;
  }
};

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
    name,
    relation,
    root,
    type,
  }: _WithFieldParamsModel<TType>): _WithFieldModel =>
  (target, propertyKey) => {
    (expire || isUnique) &&
      (Index({ options: expire ? { expireAfterSeconds: expire } : {} }) as PropertyDecorator)(
        target,
        propertyKey,
      );

    isSchema &&
      getField({
        Resource,
        defaultValue,
        isArray,
        isOptional,
        leaf,
        name,
        relation,
        root,
        type,
      })(target, propertyKey);

    isDatabase &&
      getColumn({
        Resource,
        defaultValue,
        isArray,
        isOptional,
        leaf,
        name,
        relation,
        root,
        type,
      })(target, propertyKey);
  };
