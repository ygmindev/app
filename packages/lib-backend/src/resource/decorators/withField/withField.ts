import { FIELD_TYPE } from '@lib/backend/resource/decorators/withField/withField.constants';
import type { WithFieldParamsModel } from '@lib/backend/resource/decorators/withField/withField.models';
import { ArrayType, Embedded, Index, PrimaryKey, Property } from '@mikro-orm/core';
import { Field } from 'type-graphql';

const _getField = <TType>({ Resource, type }: WithFieldParamsModel<TType>): PropertyDecorator => {
  if (Resource) {
    return Field(() => Resource as unknown as object);
  }
  switch (type) {
    case FIELD_TYPE.STRING:
      return Field(() => String);
    case FIELD_TYPE.BOOLEAN:
      return Field(() => Boolean);
    case FIELD_TYPE.DATE:
      return Field(() => Date);
    default:
      return Field();
  }
};

const _getColumn = <TType>({
  Resource,
  isArray,
  isOptional,
  type,
}: WithFieldParamsModel<TType>): PropertyDecorator => {
  if (Resource) {
    return (
      isArray
        ? Embedded(() => Resource, { array: true, nullable: isOptional })
        : Property({ nullable: isOptional, type: () => Resource })
    ) as PropertyDecorator;
  }
  const [_Field, _options] = (() => {
    if (isArray) {
      return [Property, { type: ArrayType }];
    }
    switch (type) {
      case FIELD_TYPE.PRIMARY_KEY:
        return [PrimaryKey, { type: 'ObjectId' }];
      case FIELD_TYPE.ID:
        return [Property, { type: 'ObjectId' }];
      case FIELD_TYPE.STRING:
        return [Property, { type: 'string' }];
      case FIELD_TYPE.DATE:
        return [Property, { type: Date }];
      default:
        return [Property, { type: undefined }];
    }
  })();
  return _Field({ ..._options, nullable: isOptional }) as PropertyDecorator;
};

export const withField =
  <TType>({
    type = FIELD_TYPE.COLUMN,
    Resource,
    expire,
    isArray,
    isOptional,
    isUnique,
  }: WithFieldParamsModel<TType> = {}): PropertyDecorator =>
  (target, propertyKey) => {
    (expire || isUnique) &&
      (Index({ options: expire ? { expireAfterSeconds: expire } : {} }) as PropertyDecorator)(
        target,
        propertyKey,
      );

    _getField({ Resource, isArray, isOptional, type })(target, propertyKey);

    _getColumn({ Resource, isArray, isOptional, type })(target, propertyKey);
  };
